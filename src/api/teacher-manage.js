import request from '@/utils/request'
import qs from 'qs'
//   saveAssignedRole;
// 添加教师
// teacher:save
export function addTeacher(data) {
  return request({
    url: '/system-manage/teacher/save',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 更新教师信息
// teacher: update;
export function updateTeacher(data) {
  return request({
    url: '/system-manage/teacher/update',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 删除教师
// teacher:delete
export function deleteTeacher(data) {
  const params = qs.stringify(data)
  return request({
    url: `/system-manage/teacher/delete?${params}`,
    method: 'GET'
  })
}

// 获取所有教师信息
// teacher:getAll
export function getAllTeacher() {
  return request({
    url: '/system-manage/teacher/getAll',
    method: 'GET'
  })
}

// 分页查询教师信息
// teacher:pageList
export function getTeacherPageList(data) {
  const params = qs.stringify(data)
  return request({
    url: `/system-manage/teacher/pageList?${params}`,
    method: 'GET'
  })
}

// 查询教师角色
// teacher:getAssignedRole
export function getAssignedRole(data) {
  const params = qs.stringify(data)
  return request({
    url: `/system-manage/teacher/getAssignedRole?${params}`,
    method: 'GET'
  })
}

// 分配教师角色
// teacher: saveAssignedRole;
export function saveAssignedRole(data) {
  return request({
    url: '/system-manage/teacher/saveAssignedRole',
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 修改教师密码
export function updatePasswordById(data) {
  return request({
    url: `/system-manage/teacher/updatePasswordById`,
    method: 'POST',
    data: qs.stringify(data)
  })
}
