function touch(a,b) {
    if(b.x-a.x <= b.width/2+a.width/2 
      && a.x-b.x <= b.width/2+a.width/2
      && b.y-a.y <= b.height/2+a.height/2 
      && a.y-b.y <= b.height/2+a.height/2){
      return true;
    }
    else {
     return false;
    }
  }

  function bounce(c,d) {
      if (touch(c,d)) {
          c.velocityX = c.velocityX * -1;
          c.velocityY = c.velocityY * -1;

          d.velocityX = d.velocityX * -1;
          d.velocityY = d.velocityY * -1;
      }
  }