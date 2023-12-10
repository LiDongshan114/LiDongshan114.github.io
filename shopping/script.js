// 获取HTML元素引用  
const itemTable = document.getElementById('itemTable');  
const totalPrice = document.getElementById('totalPrice');  
const addItemBtn = document.getElementById('addItemBtn');  
const checkoutBtn = document.getElementById('checkoutBtn');  
let items = []; // 用于存储商品列表的数组  
let total = 0; // 用于存储总价的变量  
  
// 添加商品功能实现  
addItemBtn.addEventListener('click', function() {  
  const itemName = prompt('请输入商品名称：');  
  if (itemName) {  
    const itemPrice = Number(prompt('请输入商品价格：'));  
    if (!isNaN(itemPrice)) {  
      items.push({ name: itemName, price: itemPrice });  
      updateDisplay();  
    } else {  
      alert('商品价格请输入有效数字！');  
    }  
  }  
});  
  
// 更新显示内容函数  
function updateDisplay() {  
  // 清空表格内容  
  while (itemTable.firstChild) {  
    itemTable.removeChild(itemTable.firstChild);  
  }  
  
  // 计算总价并更新显示  
  total = 0;  
  items.forEach(function(item) {  
    total += item.price;  
  });  
  totalPrice.textContent = total.toFixed(2);  
  
  // 更新商品列表显示  
  items.forEach(function(item, index) {  
    const row = document.createElement('tr');  
    row.id = "row-" + index; // 给每一行添加一个id，用来标识不同的行  
    const nameCell = document.createElement('td');  
    nameCell.textContent = item.name;  
    row.appendChild(nameCell);  
    const priceCell = document.createElement('td');  
    priceCell.className = "price"; // 给每一行的单价单元格添加一个类名，用来获取和修改它们的值  
    priceCell.textContent = item.price.toFixed(2);  
    row.appendChild(priceCell);  
    const quantityCell = document.createElement('td');  
    const quantityInput = document.createElement('input'); // 创建一个输入框，用来输入数量  
    quantityInput.type = "number"; // 设置输入框的类型为数字  
    quantityInput.value = "1"; // 设置输入框的初始值为1  
    quantityInput.min = "1"; // 设置输入框的最小值为1  
    quantityInput.onchange = function() { updateSubtotal(this); }; // 给输入框添加一个事件监听器，用来在数量改变时更新小计和总计  
    quantityCell.appendChild(quantityInput); // 把输入框添加到数量单元格中  
    row.appendChild(quantityCell);  
    const subtotalCell = document.createElement('td');  
    subtotalCell.className = "subtotal"; // 给每一行的小计单元格添加一个类名，用来获取和修改它们的值  
    subtotalCell.textContent = item.price.toFixed(2); // 小计等于单价乘以数量  
    row.appendChild(subtotalCell);  
    itemTable.appendChild(row);  
  });  
}  
  
// 结账功能实现  
checkoutBtn.addEventListener('click', function() {  
  items = []; // 清空商品列表  
  total = 0; // 清空总价  
  updateDisplay(); // 更新显示内容  
});  
  
// 定义一个函数，用来更新小计和总计  
function updateSubtotal(countInput) {  
  // 获取当前的数量输入框  
  var count = countInput;  
  // 获取当前的数量值  
  var countValue = parseInt(count.value);  
  // 获取当前行的tr元素  
  var row = count.parentElement.parentElement;  
  // 获取当前行的单价单元格  
  var price = row.querySelector(".price");  
  // 获取当前行的单价值  
  var priceValue = parseFloat(price.textContent);  
  // 获取当前行的小计单元格  
  var subtotal = row.querySelector(".subtotal");  
  // 计算当前行的小计值  
  var subtotalValue = countValue * priceValue;  
  // 更新当前行的小计单元格的值  
  subtotal.textContent = subtotalValue.toFixed(2);  
  // 获取总计单元格  
  var total = document.querySelector("#totalPrice");  
  // 获取所有的小计单元格  
  var subtotals = document.querySelectorAll(".subtotal");  
  // 定义一个变量，用来存储总计值  
  var totalValue = 0;  
  // 遍历所有的小计单元格，把它们的值相加  
  for (var i = 0; i < subtotals.length; i++) {  
    totalValue += parseFloat(subtotals[i].textContent);  
  }  
  // 更新总计单元格的值  
  total.textContent = totalValue.toFixed(2);  
}
