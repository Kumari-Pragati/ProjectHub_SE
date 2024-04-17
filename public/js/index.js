nt.addEventListener("DOMContentLoaded", function() {
    // Populate specialities
    const specialitiesRow = document.querySelector('.specialities-row');
    const specialitiesData = [
        { icon: 'icon-medical-005', title: '24/7 Ambulance support', description: '24 Hours Ambulance Service, Emergency Ambulance Service Providers in India.' },
        { icon: 'icon-medical-054', title: 'LASIK Vision Correction Treatment', description: 'We have LASIK Vision treatment which is the latest in the world.' },
        // Add more specialities as needed
    ];

    specialitiesData.forEach(function(speciality) {
        const specialityItem = document.createElement('div');
        specialityItem.classList.add('col-md-4');
        specialityItem.innerHTML = `
            <div class="content-boxes-v5">
                <i class="${speciality.icon}"></i>
                <div class="overflow-h">
                    <h3 class="no-top-space">${speciality.title}</h3>
                    <p>${speciality.description}</p>
                </div>
            </div>
        `;
        specialitiesRow.appendChild(specialityItem);
    });

    // Populate pricing packages
    const pricingRow = document.querySelector('.pricing-row');
    const pricingData = [
        { name: 'UNITY Basic wellness', price: '₹1500/-', features: ['CBC', 'Blood Group & RH', 'Urine (Routine & Micro)'] },
        { name: 'UNITY Gold Wellness', price: '₹3000/-', features: ['CBC', 'Blood Group & RH', 'Urine (Routine & Micro)', 'SGPT'] },
        // Add more pricing packages as needed
    ];

    pricingData.forEach(function(package) {
        const packageItem = document.createElement('div');
        packageItem.classList.add('col-md-3', 'col-xs-6', 'col-2xs-12');
        packageItem.innerHTML = `
            <div class="pricing-v9 hover-effect">
                <div class="pricing-v9-head">
                    <h3 class="h3">${package.name}</h3>
                </div>
                <ul>
                    ${package.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="pricing-v9-price">
                    For <span class="g-color-default">${package.price}</span>
                </div>
            </div>
        `;
        pricingRow.appendChild(packageItem);
    });

    // Fetch recent blog posts from API and populate blog row dynamically
    fetch('https://api.example.com/recent-blogs')
        .then(response => response.json())
        .then(data => {
            const blogRow = document.querySelector('.blog-row');
            data.forEach(function(blog) {
                const blogItem = document.createElement('div');
                blogItem.classList.add('col-md-4');
                blogItem.innerHTML = `
                    <div class="news-v1-in">
                        <img class="img-responsive" src="${blog.image}" alt="">
                        <h3><a href="${blog.url}">${blog.title}</a></h3>
                        <p>${blog.excerpt}</p>
                        <ul class="list-inline news-v1-info">
                            <li><span>By</span> <a href="#">${blog.author}</a></li>
                            <li>|</li>
                            <li><i class="fa fa-clock-o"></i> ${blog.date}</li>
                            <li><a href="${blog.url}" class="btn-u btn-brd btn-brd-hover blogButton">Read More</a></li>
                        </ul>
                    </div>
                `;
                blogRow.appendChild(blogItem);
            });
        })
        .catch(error => console.error('Error fetching recent blogs:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    // Fetch recent blog posts from API and populate blog row dynamically
    fetch('https://api.example.com/recent-blogs')
        .then(response => response.json())
        .then(data => {
            const blogRow = document.querySelector('.blog-row');
            data.forEach(function(blog) {
                const blogItem = document.createElement('div');
                blogItem.classList.add('col-md-4', 'blog-item');
                blogItem.innerHTML = `
                    <div class="news-v1-in">
                        <img src="${blog.image}" alt="${blog.title}">
                        <h3><a href="${blog.url}">${blog.title}</a></h3>
                        <p>${blog.excerpt}</p>
                        <ul class="list-inline news-v1-info">
                            <li><span>By</span> <a href="#">${blog.author}</a></li>
                            <li>|</li>
                            <li><i class="fa fa-clock-o"></i> ${blog.date}</li>
                            <li><a href="${blog.url}" class="btn-u btn-brd btn-brd-hover blogButton">Read More</a></li>
                        </ul>
                    </div>
                `;
                blogRow.appendChild(blogItem);
            });
        })
        .catch(error => console.error('Error fetching recent blogs:', error));
});
