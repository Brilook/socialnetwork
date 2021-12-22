import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, 
  (users) => {
    return users.filter(user => true);
  });

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};


// users: state.usersPage.users,
// pageSize: state.usersPage.pageSize,
// totalUserCount: state.usersPage.totalUserCount,
// currentPage: state.usersPage.currentPage,
// isFetching: state.usersPage.isFetching,
// followingInProgress: state.usersPage.followingInProgress,