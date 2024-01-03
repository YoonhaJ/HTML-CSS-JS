const images = ["bg-1.jpg"]
const bgPics = ["bg-1.jpg","bg-2.jpg","bg-3.jpg","bg-4.jpg","bg-5.jpg"]

// 새로고침 하면 이미지 바꾸기 (랜덤하게), 이미지 숫자 부분만 무작위로 지정
window.onload = () => {
  // const num = Math.floor(Math.random()*5) + 1;
  // console.log(num)
  // document.body.style.backgroundImage = `url(/images/bg-${num}.jpg)`
  const num = Math.floor(Math.random()*5);
  document.body.style.backgroundImage = `url(/images/${bgPics[num]})`
};