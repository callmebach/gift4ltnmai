const buttonNo = document.querySelector('.no');
buttonNo.disabled = true;

const buttonYes = document.querySelector('.yes');
buttonYes.addEventListener('click', () => {
    document.body.innerHTML = `
      
        <div class="animated-text">
            <div class="text-hello">
                <span style="--i:5">M</span>
                <span style="--i:6">ì</span>
                <span style="--i:7">n</span>
                <span style="--i:8">h</span>
            </div>

             <div class="text-hello">
                <span style="--i:9">c</span>
                <span style="--i:10">ó</span>
            </div>

             <div class="text-hello">
                <span style="--i:11">m</span>
                <span style="--i:12">ó</span>
                <span style="--i:13">n</span>
            </div>

             <div class="text-hello">
                <span style="--i:14">q</span>
                <span style="--i:15">u</span>
                <span style="--i:16">à</span>
            </div>

            <div class="text-hello">
                <span style="--i:17">n</span>
                <span style="--i:18">à</span>
                <span style="--i:19">y</span>
            </div>

            <div class="text-hello">
                <span style="--i:20">c</span>
                <span style="--i:21">h</span>
                <span style="--i:22">o</span>
            </div>

            <div class="text-hello">
                <span style="--i:23">c</span>
                <span style="--i:24">ậ</span>
                <span style="--i:25">u</span>
            </div>
        </div>

         <div class="animated-text">
            <span style="--i:30" id="gift-icon"><i class="fa-solid fa-gift"></i></span>
         </div>
    `;

  // Thêm sự kiện click cho hộp quà
  const giftIcon = document.getElementById('gift-icon');
  giftIcon.addEventListener('click', startFireworks);
});

function startFireworks() {
  // Bắn pháo hoa liên tục mỗi 1 giây
  setInterval(showFireworks, 1000);
}

function showFireworks() {
  // Bắt đầu bắn pháo hoa
  const fireworkContainer = document.createElement('div');
  fireworkContainer.className = 'firework';
  document.body.appendChild(fireworkContainer);

  // Chọn vị trí ngẫu nhiên trên màn hình để bắn
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * (window.innerHeight / 2); // Bắn từ nửa trên của màn hình

  for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      fireworkContainer.appendChild(particle);

      // Vị trí xuất phát
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;

      // Tạo màu sắc ngẫu nhiên
      const randomColor = getRandomColor();
      particle.style.backgroundColor = randomColor;

      // Tạo chuyển động cho các hạt
      const angle = Math.random() * 2 * Math.PI; // Góc ngẫu nhiên
      const distance = Math.random() * 100 + 50; // Khoảng cách ngẫu nhiên
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      // Hiệu ứng fade out và chuyển động
      particle.animate([
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
      ], {
          duration: 1000 + Math.random() * 1000, // Thời gian ngẫu nhiên
          easing: 'ease-out',
          fill: 'forwards'
      });

      // Xóa hạt sau khi hoàn thành
      particle.addEventListener('animationend', () => {
          particle.remove();
      });
  }

  // Xóa container pháo hoa sau khi hoàn tất
  setTimeout(() => {
      fireworkContainer.remove();
      addMessage();
  }, 2000);
}

function addMessage() {
    // Tạo phần tử chữ
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = `Yêu em nhìuuuuu <3`;
    message.style.color = "#787878"; // Màu chữ
    message.style.fontSize = "2em"; // Kích thước chữ
    message.style.textAlign = "center"; // Căn giữa
    message.style.position = "absolute"; // Đặt vị trí tuyệt đối
    message.style.top = "50%"; // Căn giữa theo trục Y
    message.style.left = "50%"; // Căn giữa theo trục X
    message.style.transform = "translate(-50%, -50%)"; // Căn giữa hoàn hảo

    // Thêm phần tử chữ vào body
    document.body.appendChild(message);

    // Hiệu ứng mờ dần cho chữ
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000);

    // Xóa chữ sau khi hiệu ứng mờ kết thúc
    setTimeout(() => {
        message.remove();
    }, 4000);
}

function getRandomColor() {
  const letters = '012346789ABCD';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 
};
