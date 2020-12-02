// export default Date.prototype.yyyymmdd = function () {
//     const dateObj = new Date();
//     return (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1) + "-" + (dateObj.getUTCDate());
// }
// 10일 미만시 mm형태가 아닌 m형태로 찍힘

export default Date.prototype.yyyymmdd = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}