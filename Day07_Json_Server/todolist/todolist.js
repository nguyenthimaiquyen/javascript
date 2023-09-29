const API_URL = 'http://localhost:3000/todos';

const todoAPI = {
    async getAllTodos() {
        const res = await fetch(API_URL);
        return await res.json();
    },
    async createNewTodo(data) {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await res.json();

    },
    async updateTodo(id, data) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await res.json();
    },
    async deleteTodo(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        return await res.json();
    }
}

let todos = [];

//gọi API lấy dữ liệu và render ra giao diện
const getAllTodos = async () => {
    try {
        //gọi API để lấy dữ liệu
        let data = await todoAPI.getAllTodos();
        //lưu dữ liệu vào biến toàn cục để sử dụng cho chức năng khác
        todos = data;
        //hiển thị dữ liệu ra ngoài giao diện
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
}

//hiển thị dữ liệu ra giao diện
const todoListEle = document.getElementById('todo-list');
const renderTodos = todoList => {
    let html = '';
    todoList.forEach(todo => {
        html += `
            <li>
                <input type="checkbox" ${todo.conpleted ? 'checked' : ''} onchange="toggleStatus(${todo.id})">
                <span class=${todo.conpleted ? 'active' : ''}>${todo.title}</span>
                <button onclick="editTodo(${todo.id})">EDIT</button>
                <button onclick="deleteTodo(${todo.id})">DELETE</button>
            </li>
        `
    });
    todoListEle.innerHTML = html;
}

//thêm todo mới
const inputTodoEl = document.getElementById('input-todo');
const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', async () => {
    try {
        //lấy dữ liệu từ ô input
        const title = inputTodoEl.value.trim();
        //kiểm tra dữ liệu
        if (title.length === 0) {
            alert('Vui lòng nhập dữ liệu');
            return;
        }
        //tạo object mới
        const newTodo = {
            title: title,
            conpleted: false,
        }
        //gọi API để tạo mới
        let data = await todoAPI.createNewTodo(newTodo);
        //thêm todo mới vào mảng todos
        todos.push(data);
        //hiển thị dữ liệu ra giao diện
        renderTodos(todos);   
        //reset ô input
        inputTodoEl.value = ''; 
    } catch (error) {
        console.log(error)
    }
})

//xóa todo
const deleteTodo = async (id) => {
    try {
        //gọi API để xóa todo trong server
        let data = await todoAPI.deleteTodo(id);
        //xóa todo trong mảng ban đầu
        todos.forEach((todo, index) => {
            if (todo.id === id) {
                todos.splice(index, 1);
            }
        });
        //render dữ liệu lại giao diện
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
}

//thay đổi trạng thái của todo
const toggleStatus = async (id) => {
    try {
        //lấy todo trong mảng todos theo id
        let todo = todos.find(todo => todo.id === id);
        //tạo object mới
        const data = {
            title: todo.title,
            conpleted: !todo.conpleted,
        }
        //gọi API update todo để cập nhật phía server
        let res = await todoAPI.updateTodo(id, data);
        //cập nhật trạng thái todo trong mảng todos
        todo.conpleted = res.conpleted;
        //hiển thị dữ liệu ra giao diện
        renderTodos();
    } catch (error) {
        console.log(error);
    }
}

//sửa todo
const editTodo = async (id) => {
    try {
        //hiển thị prompt để nhập dữ liệu mới
        let newTitle = window.prompt("Nhập todo mới: ")
        //lấy todo trong mảng todos theo id
        let todo = todos.find(todo => todo.id === id);
        //tạo object mới
        const data = {
            title: newTitle,
            conpleted: todo.conpleted
        }
        //gọi API update todo để cập nhật phía server
        let res = await todoAPI.updateTodo(id, data);
        //cập nhật trạng thái todo trong mảng todos
        todo.title = newTitle;
        //hiển thị dữ liệu ra giao diện
        renderTodos();
    } catch (error) {
        console.log(error);
    }
}


//vừa load trang thì gọi hàm để lấy dữ liệu và hiển thị ra giao diện
getAllTodos();
