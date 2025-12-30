// ZakatLink Static Prototype - Vanilla JavaScript

// Initialize localStorage with mock data if not already present
function initializeData() {
    if (!localStorage.getItem('zakatlink_initialized')) {
        // Mock students data
        const students = [
            {
                id: 1,
                name: 'Ahmed Hassan',
                email: 'ahmed.hassan@university.edu',
                university: 'National University',
                field: 'Computer Science',
                year: '3rd Year',
                need: 'Tuition Fee',
                amount: '$2,000',
                description: 'I am a dedicated student pursuing Computer Science. I need financial assistance to cover my tuition fees for the upcoming semester.',
                status: 'verified',
                connected: false
            },
            {
                id: 2,
                name: 'Fatima Ali',
                email: 'fatima.ali@university.edu',
                university: 'State University',
                field: 'Medicine',
                year: '4th Year',
                need: 'Books & Materials',
                amount: '$800',
                description: 'Medical student in need of assistance to purchase required textbooks and laboratory materials for clinical rotations.',
                status: 'verified',
                connected: false
            },
            {
                id: 3,
                name: 'Omar Ibrahim',
                email: 'omar.ibrahim@university.edu',
                university: 'Tech University',
                field: 'Engineering',
                year: '2nd Year',
                need: 'Laptop & Software',
                amount: '$1,500',
                description: 'Engineering student requiring a laptop and software licenses for coursework and projects.',
                status: 'verified',
                connected: false
            },
            {
                id: 4,
                name: 'Zainab Malik',
                email: 'zainab.malik@university.edu',
                university: 'City College',
                field: 'Business',
                year: '1st Year',
                need: 'Accommodation',
                amount: '$1,200',
                description: 'First-year business student seeking assistance with accommodation costs near campus.',
                status: 'pending',
                connected: false
            }
        ];

        // Mock admin users data
        const users = [
            {
                id: 1,
                name: 'Ahmed Hassan',
                email: 'ahmed.hassan@university.edu',
                role: 'Student',
                university: 'National University',
                status: 'verified',
                joinDate: '2024-01-15'
            },
            {
                id: 2,
                name: 'Fatima Ali',
                email: 'fatima.ali@university.edu',
                role: 'Student',
                university: 'State University',
                status: 'verified',
                joinDate: '2024-02-20'
            },
            {
                id: 3,
                name: 'Omar Ibrahim',
                email: 'omar.ibrahim@university.edu',
                role: 'Student',
                university: 'Tech University',
                status: 'verified',
                joinDate: '2024-03-10'
            },
            {
                id: 4,
                name: 'Zainab Malik',
                email: 'zainab.malik@university.edu',
                role: 'Student',
                university: 'City College',
                status: 'pending',
                joinDate: '2024-12-15'
            },
            {
                id: 5,
                name: 'Hassan Yusuf',
                email: 'hassan.yusuf@university.edu',
                role: 'Student',
                university: 'Metro University',
                status: 'pending',
                joinDate: '2024-12-20'
            },
            {
                id: 6,
                name: 'Sarah Khan',
                email: 'sarah.khan@email.com',
                role: 'Donor',
                university: 'N/A',
                status: 'verified',
                joinDate: '2024-01-05'
            },
            {
                id: 7,
                name: 'Mohammad Rahman',
                email: 'mohammad.rahman@email.com',
                role: 'Donor',
                university: 'N/A',
                status: 'verified',
                joinDate: '2024-02-10'
            }
        ];

        localStorage.setItem('zakatlink_students', JSON.stringify(students));
        localStorage.setItem('zakatlink_users', JSON.stringify(users));
        localStorage.setItem('zakatlink_initialized', 'true');
    }
}

// Login functions
function loginAs(role) {
    localStorage.setItem('zakatlink_current_user', role);
    
    switch(role) {
        case 'student':
            window.location.href = 'dashboard-student.html';
            break;
        case 'donor':
            window.location.href = 'dashboard-donor.html';
            break;
        case 'admin':
            window.location.href = 'dashboard-admin.html';
            break;
    }
}

// Student Dashboard Functions
function loadStudentDashboard() {
    const statusElement = document.getElementById('student-status');
    if (statusElement) {
        // Simulate a pending status
        const status = 'pending'; // Could be 'verified' or 'pending'
        
        if (status === 'pending') {
            statusElement.innerHTML = '<span class="status-badge status-pending">⏳ Verification Pending</span>';
        } else {
            statusElement.innerHTML = '<span class="status-badge status-verified">✓ Verified</span>';
        }
    }
}

function submitZakatRequest(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = {
        need: form.need.value,
        amount: form.amount.value,
        description: form.description.value,
        university: form.university.value
    };
    
    // Show success message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'card';
    messageDiv.style.backgroundColor = '#d1fae5';
    messageDiv.style.border = '2px solid #10b981';
    messageDiv.innerHTML = `
        <h3 style="color: #059669; margin-bottom: 1rem;">✓ Request Submitted Successfully!</h3>
        <p style="color: #047857;">Your Zakat request has been submitted and is pending admin approval. You will be notified once it's verified.</p>
    `;
    
    const container = document.querySelector('.dashboard .container');
    container.insertBefore(messageDiv, container.firstChild);
    
    // Reset form
    form.reset();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Donor Dashboard Functions
function loadDonorDashboard() {
    const students = JSON.parse(localStorage.getItem('zakatlink_students') || '[]');
    const studentsGrid = document.getElementById('students-grid');
    
    if (studentsGrid) {
        studentsGrid.innerHTML = students
            .filter(student => student.status === 'verified')
            .map(student => `
                <div class="student-card fade-in">
                    <h3>${student.name}</h3>
                    <div class="info">📚 ${student.field}</div>
                    <div class="info">🎓 ${student.university}</div>
                    <div class="info">📅 ${student.year}</div>
                    <div class="info">💰 ${student.need} - ${student.amount}</div>
                    <div class="description">${student.description}</div>
                    ${student.connected 
                        ? '<button class="btn btn-disabled btn-disabled" disabled>✓ Connection Request Sent</button>'
                        : `<button class="btn btn-success" onclick="connectWithStudent(${student.id})">Connect & Donate</button>`
                    }
                </div>
            `).join('');
    }
}

function connectWithStudent(studentId) {
    const students = JSON.parse(localStorage.getItem('zakatlink_students') || '[]');
    const studentIndex = students.findIndex(s => s.id === studentId);
    
    if (studentIndex !== -1) {
        students[studentIndex].connected = true;
        localStorage.setItem('zakatlink_students', JSON.stringify(students));
        
        // Reload the dashboard to show updated state
        loadDonorDashboard();
        
        // Show success message
        showNotification('Connection request sent successfully! The student will be notified.');
    }
}

// Admin Dashboard Functions
function loadAdminDashboard() {
    const users = JSON.parse(localStorage.getItem('zakatlink_users') || '[]');
    const tbody = document.querySelector('#users-table tbody');
    
    if (tbody) {
        tbody.innerHTML = users.map(user => `
            <tr class="${user.status === 'verified' ? 'verified' : ''}" id="user-row-${user.id}">
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.university}</td>
                <td><span class="status-badge ${user.status === 'verified' ? 'status-verified' : 'status-pending'}">${user.status === 'verified' ? '✓ Verified' : '⏳ Pending'}</span></td>
                <td>${user.joinDate}</td>
                <td>
                    ${user.status === 'pending' 
                        ? `<button class="btn btn-success" onclick="verifyUser(${user.id})">Verify</button>`
                        : '<button class="btn btn-disabled" disabled>Verified</button>'
                    }
                </td>
            </tr>
        `).join('');
    }
}

function verifyUser(userId) {
    const users = JSON.parse(localStorage.getItem('zakatlink_users') || '[]');
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        users[userIndex].status = 'verified';
        localStorage.setItem('zakatlink_users', JSON.stringify(users));
        
        // Update the row
        const row = document.getElementById(`user-row-${userId}`);
        if (row) {
            row.classList.add('verified');
            row.querySelector('td:nth-child(5)').innerHTML = '<span class="status-badge status-verified">✓ Verified</span>';
            row.querySelector('td:nth-child(7)').innerHTML = '<button class="btn btn-disabled" disabled>Verified</button>';
        }
        
        // Show success message
        showNotification('User verified successfully!');
    }
}

// Utility Functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function logout() {
    localStorage.removeItem('zakatlink_current_user');
    window.location.href = 'index.html';
}

// Initialize data on page load
initializeData();

// Page-specific initialization
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'dashboard-student.html':
            loadStudentDashboard();
            break;
        case 'dashboard-donor.html':
            loadDonorDashboard();
            break;
        case 'dashboard-admin.html':
            loadAdminDashboard();
            break;
    }
});
