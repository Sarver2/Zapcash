const logInForm = document.querySelector(".login-form");
const signinBtn = document.querySelector("#signin-btn");
const paymentModal = document.querySelector(".payment-modal");
const emailInput = document.getElementById("inputemail");
const accountInput = document.getElementById("input-account");
const passwordInput = document.getElementById("input-password");
let selectBank = document.querySelector(".select-bank");
const sound1 = document.getElementById("notification-sound1");

const date = new Date();
const date2 = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
console.log(date2);

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msgBank = document.querySelector(".display-bank");
  msgBank.innerHTML = `${selectBank.value.toUpperCase()}`;

  const msgBank2 = document.querySelector(".display-bank2");
  msgBank2.innerHTML = `${selectBank.value}`;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });

  sound1.play();

  logInForm.reset();
});

const paymentBtn = document.getElementById("payment-btn");

function display() {
  const amountInput = document.querySelector("#amount-input").value;
  let recieverName = document.querySelector("#reciever-input").value;
  const recieverNum = document.querySelector("#mobile-input").value;

  const displayAmnt = document.querySelector(".display-amount");
  const displayName = document.querySelector(".display-name");

  displayAmnt.innerHTML = `${amountInput * 1000}`;
  displayName.innerHTML = `${recieverName.toUpperCase()}`;

  let date = new Date();
  let date2 = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

  const msgAmount = document.querySelector(".msg-amount");
  const msgAct = document.querySelector(".msg-act");
  const msgDate = document.querySelector(".msg-date");
  const msgNum = document.querySelector(".msg-num");

  msgAmount.innerHTML = `${amountInput * 1000}`;
  msgNum.innerHTML = `${recieverNum}`;
  msgDate.innerHTML = `${date2}`;

  const sound2 = document.getElementById("notification-sound2");
  sound2.play();

  Swal.fire({
    title: "Payment successfull",
    text: "transaction completed",
    icon: "success",
  });
}

paymentBtn.addEventListener("click", (e) => {
  display();
});

const doneBtn = document.querySelector("#done-btn");

doneBtn.addEventListener("click", (e) => {
  const header = document.querySelector(".landing-header");
  header.innerHTML = ` <div class="payment-container">
                    <div class="payment-heading">
                      <h6>
                        Secure payment with
                        <span
                          class="heading-logo"
                          style="color: #69385c; font-weight: 700"
                          >ZAPcash</span
                        >
                      </h6>
                    </div>

                    <div class="login-link">
                      <span class="">Win exciting prizes and cashback </span>
                    </div>
                  </div>`;

  const firstForm = document.querySelector(".first-form");
  firstForm.innerHTML = ` <form class="login-form">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto" style="width: 100%">
                        <input
                          type="tel"
                          id="mobile-input"
                          class="form-control"
                          placeholder="Enter mobile"
                        />
                      </div>

                      <div class="col-auto" style="width: 100%">
                        <input
                          type="text"
                          id="amount-input"
                          class="form-control"
                          placeholder="Amount"
                        />
                      </div>

                      <div class="col-auto" style="width: 100%">
                        <input
                          type="text"
                          id="reciever-input"
                          class="form-control"
                          aria-describedby="passwordHelpInline"
                          placeholder="Reciever's name"
                        />
                      </div>

                      <div class="col-auto" style="width: 100%">
                        <button
                          type="button"
                          class="btn"
                          id="payment2-btn"
                          style="
                            width: 100%;
                            background-color: #69385c;
                            color: white;
                            font-weight: 500;
                          "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                 `;

  const firstLine = document.querySelector(".first-line");
  firstLine.innerHTML = ` <div style="width: 33%"><hr /></div>
                  <div><span> UPI payment</span></div>
                  <div style="width: 33%"><hr /></div>`;

  const zapLogo = document.querySelector(".logo-container");
  zapLogo.innerHTML = `<div class="zap-icon"><h3 class="main-logo">ZAPcash</h3></div>`;

  const firstFooter = document.querySelector(".signup-footer");
  firstFooter.innerHTML = ` <div>
                    <span>We are official UPI payment partner</span>
                  </div>
                  <div>
                    <span
                      ><a href="#" style="color: #69385c; text-decoration: none"
                        >Terms of user</a
                      >
                      and
                      <a href="#" style="color: #69385c; text-decoration: none"
                        >Privacy policy</a
                      ></span
                    >`;

  const sound3 = document.getElementById("notification-sound3");
  sound3.play();
  const payBtn2 = document.querySelector("#payment2-btn");
  payBtn2.addEventListener("click", (e) => {
    display();
  });
});
