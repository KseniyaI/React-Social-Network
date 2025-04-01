/* import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";

const UsersContainer = () => {
  const dispatch = useDispatch();

  // Достаем данные из Redux (аналог mapStateToProps)
  const users = useSelector((state) => state.usersPage.users);
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount);
  const currentPage = useSelector((state) => state.usersPage.currentPage);

  // Фетчим пользователей при загрузке
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        dispatch(setUsersAC(response.data.items));
        dispatch(setTotalUsersCountAC(response.data.totalCount));
      });
  }, [dispatch, currentPage, pageSize]); // Перезапуск, если изменится currentPage или pageSize

  // Обработчик смены страницы
  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber));
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        dispatch(setUsersAC(response.data.items));
      });
  };

  return (
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      users={users}
      follow={(userId) => dispatch(followAC(userId))}
      unfollow={(userId) => dispatch(unfollowAC(userId))}
    />
  );
};

export default UsersContainer;
 */