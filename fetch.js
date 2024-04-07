async function myFetch(url) {
  try {
    let reqUrl = `https://mock.apifox.com/m1/4281186-3923301-default/${url}`
    const response = await fetch(reqUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json() // 解析响应数据为 JSON 格式
    return data // 返回解析后的数据
  } catch (error) {
    console.error('Error:', error)
    throw error // 抛出错误，以便调用者处理
  }
}
