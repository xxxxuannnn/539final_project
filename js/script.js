

const magic = document.getElementById('magic');
const header = document.querySelector('header');
const nav = document.querySelector('nav')


window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  // 检查 #magic 是否已经超过了 header 的底部
  if (scrollPosition > headerHeight / 2) {
    
    setTimeout(() => {
      magic.innerHTML = ''; // 再清空文字内容
    }, 500); // 延迟500ms，等待过渡结束
    
  } else {
    magic.innerHTML = 'Explore the Magic World!'; // 重新设置文字
    magic.style.opacity = '1'; // 重新淡入
    
  }
  
});


//滚动电影
window.onload = function() {
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  // let currentIndex = 3;
  const carousel = document.querySelector('.carousel-track');
  const imgWidth = 340

  // 设置初始选中的海报
  // slides[currentIndex].classList.add('selected');

  

  // 向右移动
  rightArrow.addEventListener('click', function() {
    // 滚动至左边
    carousel.style.transform = `translateX(-${imgWidth}px)`;
    setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild); // 移动第一个图片到最后
        carousel.style.transition = 'none'; // 移除过渡
        carousel.style.transform = 'translateX(0)'; // 立即恢复
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
        }, 500);
    }, 500);
  
    
  });

  // 向左移动
  leftArrow.addEventListener('click', function() {
    // 滚动至右边
    carousel.style.transform = `translateX(${imgWidth}px)`;
    setTimeout(() => {
        carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild); // 移动最后一个图片到最前
        carousel.style.transition = 'none'; // 移除过渡
        carousel.style.transform = 'translateX(0)'; // 立即恢复
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
        }, 500);
    }, 500);
    
  });


 
};

//翻转卡片
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // 检测 Enter 或 Space 键
      // event.preventDefault(); // 防止页面滚动（尤其是 Space 键）
      // card.click(); // 模拟点击
      card.classList.toggle('flipped');
    } 
  });
});






const bookDetails = {
  book1: {
    cover: "images/Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg",
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by the British author J. K. Rowling. It is the first novel in the Harry Potter series and was Rowling's debut novel. It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents but failed to kill Harry when he was just 15 months old.",
  },
  book2: {
    cover: 'images/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
    description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
  },
  book3: {
    cover: 'images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
    description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by the British author J. K. Rowling. It is the third instalment in the Harry Potter series. The novel follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ron Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
  },
  book4: {
    cover: 'images/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
    description: "Harry Potter and the Goblet of Fire is a fantasy novel written by the British author J. K. Rowling. It is the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
  },
  book5: {
    cover: 'images/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
    description: "Harry Potter and the Order of the Phoenix is a fantasy novel written by the British author J. K. Rowling. It is the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1]",
  },
  book6: {
    cover: 'images/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
    description: "Harry Potter and the Half-Blood Prince is a fantasy novel written by the British author J. K. Rowling. It is the sixth novel in the Harry Potter series, and takes place during Harry Potter's sixth year at the wizard school Hogwarts. The novel reveals events from the early life of Lord Voldemort, and chronicles Harry's preparations for the final battle against him.",
  },
  book7: {
    cover: 'images/Harry_Potter_and_the_Deathly_Hallows.jpg',
    description: "Harry Potter and the Deathly Hallows is a fantasy novel written by the British author J. K. Rowling. It is the seventh and final novel in the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
  },
};

function showBookDetails(bookId) {
  const modal = document.getElementById('bookModal');
  const modalCover = document.getElementById('modalCover');
  const modalDescription = document.getElementById('modalDescription');

  modalCover.src = bookDetails[bookId].cover;
  modalDescription.textContent = bookDetails[bookId].description;

  modal.style.display = 'flex';
}





const modal = document.getElementById('bookModal');
  modal.style.display = 'none';
function closeModal() {
  const modal = document.getElementById('bookModal');
  modal.style.display = 'none';
}
const clickableDivs = document.querySelectorAll('.book');

    clickableDivs.forEach(div => {
      // 添加鼠标点击事件


      // 添加键盘事件（Enter 或 Space 键）
      div.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { // 检测 Enter 或 Space 键
          event.preventDefault(); // 防止页面滚动（尤其是 Space 键）
          div.click(); // 模拟点击
        }
      });
    }); 

  const clickableclose = document.querySelectorAll('.close');

    clickableclose.forEach(div => {
      // 添加鼠标点击事件
          

      // 添加键盘事件（Enter 或 Space 键）
      div.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { // 检测 Enter 或 Space 键
          event.preventDefault(); // 防止页面滚动（尤其是 Space 键）
          div.click(); // 模拟点击
        }
      });
    });

        
        
    
        
        