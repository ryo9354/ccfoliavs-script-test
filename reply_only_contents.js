  if(message.text == "ねこ"){
    msg = "にゃーん";
    }
  else if(message.extend?.roll?.critical){
    msg = + message.extend?.roll?.dices[0].value + "クリ？えらすぎる……"; 
  }
  else if(message.extend?.roll?.fumble){
    msg = "……ってことは次は成功するから！"; 
  }
  else if(message.extend?.roll?.success){
    msg = message.extend?.roll?.dices[0].value + "成功！さすが！"; 
  }
  else if(message.extend?.roll?.failure){
    msg = message.extend?.roll?.dices[0].value + "か、惜しかったね……";
  }
