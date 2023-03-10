const typeTestBtn = document.querySelectorAll('.typeTest-btns article');

for(let i = 0; i<typeTestBtn.length; i++){
typeTestBtn[i].addEventListener("click", function(){
  if(typeTestBtn[i].classList.value == 'lion'){
    alert('당신은 카리스마형입니다.\n현실감각이 매우 뛰어나 군중을 이끌며 상대방을 매료시키는 리더십과 매너를 모두 겸비하고 있습니다.\n또한 성격 역시 시원시원하고 자신의 감정을 솔직하게 표현하는 타입입니다. 그렇지만 사랑을 유지하려는 태도에 너무 성급하면서도 한편으로는 인내심이 부족하기 때문에 상대에게 쉽게 싫증을 낼 수도 있으니 주의하세요.')
  }else if(typeTestBtn[i].classList.value == 'fox'){
    alert('당신은 실속형입니다.\n당신은 사랑을 하는 것에 서두르지 않고 뚝배기처럼 천천히 데워졌다가 천천히 식을 줄 아는 상대에 대한 배려와 인내심이 많은 사람입니다.\n오직 한 사람에게만 당신의 정열과 온정을 다합니다. 다소 보수적으로 보일 경우도 있지만 당신은 당신의 첫 상대가 결혼까지 이어질 확률이 높습니다. 그러나 사랑의 표현에서는 좀 더 적극적이 될 필요가 있겠습니다.')
  }else if(typeTestBtn[i].classList.value == 'rabbit'){
    alert('당신은 현모양처형입니다.\n당신은 조용하면서 차분하며 온화한 성격으로 이성을 이끄는 타입입니다. 그때그때 상황에 맞추어 상대방을 이해하고 현실적인 대처에 뛰어납니다.')
  }else{
    alert('당신은 낭만주의자라고 말할 수 있습니다.\n정열적인 사랑과 때론 친구 같은 우정적인 사랑을 동시에 즐길 수 있는 유형입니다. 그러나 당신은 사랑에 대해 너무 이상적인 꿈을 꾸기 때문에 현실과 격차로 혼란을 겪을 수 있습니다.')
  }
});
}
