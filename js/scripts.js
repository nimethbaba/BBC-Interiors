
document.addEventListener("DOMContentLoaded", function() {
    var blogDropdown = document.getElementById('navbarDropdownBlog');
    if (blogDropdown) {
        var blogMenu = blogDropdown.nextElementSibling;
        if (blogMenu && blogMenu.classList.contains('dropdown-menu')) {
            // Clear existing items
            blogMenu.innerHTML = '';

            // Add new items
            var newItems = [
                { text: 'Blog home', href: 'blog-home.html' },
                { text: 'Blog post', href: 'blog-post.html' },
            ];

            newItems.forEach(function(item) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.className = 'dropdown-item';
                a.href = item.href;
                a.textContent = item.text;
                li.appendChild(a);
                blogMenu.appendChild(li);
            });
        }

        // Auto open on hover
        var parentLi = blogDropdown.parentElement;
        parentLi.addEventListener('mouseenter', function() {
            blogDropdown.classList.add('show');
            blogMenu.classList.add('show');
        });
        parentLi.addEventListener('mouseleave', function() {
            blogDropdown.classList.remove('show');
            blogMenu.classList.remove('show');
        });
    }
});




document.addEventListener("DOMContentLoaded", function() {
    var blogDropdown = document.getElementById('navbarDropdownPortfolio');
    if (blogDropdown) {
        var blogMenu = blogDropdown.nextElementSibling;
        if (blogMenu && blogMenu.classList.contains('dropdown-menu')) {
            // Clear existing items
            blogMenu.innerHTML = '';

            // Add new items
            var newItems = [
                { text: 'Portfolio-overview', href: 'portfolio-overview.html' },
                { text: 'Portfolio item', href: 'portfolio-item.html' },
            ];

            newItems.forEach(function(item) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.className = 'dropdown-item';
                a.href = item.href;
                a.textContent = item.text;
                li.appendChild(a);
                blogMenu.appendChild(li);
            });
        }

        // Auto open on hover
        var parentLi = blogDropdown.parentElement;
        parentLi.addEventListener('mouseenter', function() {
            blogDropdown.classList.add('show');
            blogMenu.classList.add('show');
        });
        parentLi.addEventListener('mouseleave', function() {
            blogDropdown.classList.remove('show');
            blogMenu.classList.remove('show');
        });
    }
});


//popup_message
