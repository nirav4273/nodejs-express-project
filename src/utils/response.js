export default (res, success, status, msg, data) => {
  res.status(status).send({ success, message: msg, data })
}
