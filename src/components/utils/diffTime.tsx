function diffTime (postAt: Date){
  const postDate = postAt;
  const now = new Date();
  const second = Math.floor((now.getTime() - postDate.getTime())/1000)

  if(second < 60){
    return `${second} seconds`
  } else if (second < 3600){
    const minutes = Math.floor(second / 60);
    const suffix = minutes > 1 ? `minutes`: `minute`
    return `${minutes} ${suffix}`
  } else if (second < 86400){
    const hour = Math.floor(second / 3600);
    const suffix = hour > 1 ? 'hours': 'hour'
    return `${hour} ${suffix}`
  } else if(second < 2592000){
    const days = Math.floor(second / 86400);
    const suffix = days > 1 ? "days": 'day';
    return `${days} ${suffix}`
  } else {
    const month = Math.floor(second / 2592000)
    const suffix = month > 1 ? "months" : 'month'
    return `${month} ${suffix}`
  }
}

export default diffTime
