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
  items.forEach(function(item) {  
    const row = document.createElement('tr');  
    const nameCell = document.createElement('td');  
    nameCell.textContent = item.name;  
    row.appendChild(nameCell);  
    const priceCell = document.createElement('td');  
    priceCell.textContent = item.price.toFixed(2);  
    row.appendChild(priceCell);  
    const quantityCell = document.createElement('td');  
    quantityCell.textContent = '1'; // 默认数量为1，如果需要添加数量输入框，请在这里进行修改。  
    row.appendChild(quantityCell);  
    const subtotalCell = document.createElement('td');  
    subtotalCell.textContent = item.price.toFixed(2); // 小计等于单价，如果需要计算小计（单价乘以数量），请在这里进行修改。  
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