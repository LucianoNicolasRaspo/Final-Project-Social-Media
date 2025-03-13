const postInput = document.getElementById("postInput");
const addPostBtn = document.getElementById("addPostBtn");
const postList = document.getElementById("postList");
const clearPostsBtn = document.getElementById("clearPosts");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumberDisplay = document.getElementById("pageNumber");

let posts = [];
let currentPage = 1;
const postsPerPage = 3;

function addPost() {
    const postText = postInput.value.trim();
    if (postText !== "") {
        posts.push({ text: postText, completed: false });
        postInput.value = "";
        displayPosts();
    }
}

function displayPosts() {
    postList.innerHTML = "";
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    currentPosts.forEach((post, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <label for="post-${index}">${post.text}</label>
            <button onclick="editPost(${startIndex + index})">Modify</button>
            <button onclick="deletePost(${startIndex + index})">Delete</button>
        `;
        postList.appendChild(li);
    });

    updatePagination();
}


function togglePost(index) {
    posts[index].completed = !posts[index].completed;
    displayPosts();
}

function editPost(index) {
    const newText = prompt("Edit your post:", posts[index].text);
    if (newText !== null) {
        posts[index].text = newText;
        displayPosts();
    }
}

function deletePost(index) {
    window.alert("You deleted post");
    posts.splice(index, 1);
    displayPosts();
}

function clearPosts() {
    posts = [];
    displayPosts();
}

function changePage(direction) {
    if (direction === "next" && currentPage * postsPerPage < posts.length) {
        currentPage++;
    } else if (direction === "previous" && currentPage > 1) {
        currentPage--;
    }
    displayPosts();
}

function updatePagination() {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;

    previousBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Initialize the posts display
displayPosts();
