function setTime(postAt: Date){
  const day= postAt.getDay()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sept', 'Okt', 'Nov', 'Des']
  const month = months[postAt.getMonth()]
  const year = postAt.getFullYear()
  const time = postAt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });


  return `${time} • ${month} ${day}, ${year}`

}
export default setTime