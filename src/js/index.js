const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numberPassWord1 = document.getElementById("random-password1");
let numberPassWord2 = document.getElementById("random-password2");
let btnGenerate = document.getElementById("generate-password");

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


btnGenerate.addEventListener("click", () => {
  numberPassWord1.textContent = generatePassword(16);
  numberPassWord2.textContent = generatePassword(16);
});

numberPassWord1.addEventListener("click", () => {
  navigator.clipboard.writeText(numberPassWord1.textContent);
  numberPassWord1.textContent = "Senha copiada!";
});

numberPassWord2.addEventListener("click", () => {
  navigator.clipboard.writeText(numberPassWord2.textContent);
  numberPassWord2.textContent = "Senha copiada!";
});

