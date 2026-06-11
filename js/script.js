
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'Td2VI_P-pbNXXjj1Q',        
  SERVICE_ID: 'service_oxfl48c',              
  TEMPLATE_ID: 'template_rrfm5w8'        
};


(function initEmailJS() {
  
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.onload = function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized with public key');
  };
  script.onerror = function() {
    console.error('❌ Failed to load EmailJS');
  };
  document.head.appendChild(script);
})();


const ASSETS = {
  videos: {
    ecommerce: 'assets/videos/Storage.mp4',
    clone: 'assets/videos/Calender.mp4',
    weather: 'assets/videos/weather.mp4'
  },
};


const projectData = {
  ecommerce: {
    title: 'E-Commerce App (C# .NET MAUI) - Training Project',
    description: 'A fully functional e-commerce mobile application built during my software development training at University of Limpopo.',
    details: [
      '🎓 Built during Multi-Platform Software Development training program',
      '💻 Developed with C# and .NET MAUI for cross-platform compatibility',
      '🏗️ Implements MVVM architecture pattern for clean code separation',
      '🛍️ Features product browsing, shopping cart, and checkout summary',
      '🔐 Includes user profile',
      '📱 Works on iOS, Android, Windows, and macOS'
    ],
    codeSnippet: `// Product Model Example - C# .NET MAUI
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public int StockQuantity { get; set; }
}

// Shopping Cart Service
public class CartService
{
    private ObservableCollection<CartItem> items = new ObservableCollection<CartItem>();
    
    public void AddToCart(Product product, int quantity = 1)
    {
        var existingItem = items.FirstOrDefault(i => i.Product.Id == product.Id);
        if (existingItem != null)
        {
            existingItem.Quantity += quantity;
        }
        else
        {
            items.Add(new CartItem { Product = product, Quantity = quantity });
        }
        CalculateTotal();
    }
    
    public decimal CalculateTotal()
    {
        return items.Sum(i => i.Product.Price * i.Quantity);
    }
    
    public CheckoutSummary GetCheckoutSummary()
    {
        return new CheckoutSummary
        {
            Items = items.ToList(),
            Subtotal = CalculateTotal(),
            Tax = CalculateTotal() * 0.15m,
            GrandTotal = CalculateTotal() * 1.15m
        };
    }
}`,
    videoUrl: 'assets/videos/Storage.mp4',
  },
  clone: {
    title: 'Frontend Clone App (C# .NET MAUI) - Training Project',
    description: 'A UI/UX clone of a popular mobile application, demonstrating frontend development skills learned during training.',
    details: [
      '🎓 Created during Multi-Platform Software Development training',
      '🎨 Replicated modern UI design patterns using XAML',
      '🔄 Implemented smooth navigation and page transitions',
      '📱 Created responsive layouts that work on multiple screen sizes',
      '🎭 Demonstrated advanced XAML styling and theming',
      '✨ Focused on pixel-perfect recreation of target app interface'
    ],
    codeSnippet: `<!-- XAML Layout Example - Frontend Clone -->
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="CloneApp.MainPage"
             Title="Home">
    
    <Grid RowDefinitions="Auto,*,Auto">
        <Border Grid.Row="0" Style="{StaticResource HeaderStyle}">
            <Label Text="{Binding UserName}" FontSize="20" FontAttributes="Bold"/>
        </Border>
        
        <CollectionView Grid.Row="1" ItemsSource="{Binding FeedItems}">
            <CollectionView.ItemTemplate>
                <DataTemplate>
                    <Frame CornerRadius="10" Margin="10" Style="{StaticResource CardStyle}">
                        <VerticalStackLayout Spacing="8">
                            <Label Text="{Binding Title}" FontSize="16" FontAttributes="Bold"/>
                            <Label Text="{Binding Description}" FontSize="14" TextColor="Gray"/>
                            <Button Text="View Details" Command="{Binding Source={RelativeSource AncestorType={x:Type viewmodels:MainViewModel}}, Path=ItemSelectedCommand}"
                                    CommandParameter="{Binding .}" Style="{StaticResource ButtonStyle}"/>
                        </VerticalStackLayout>
                    </Frame>
                </DataTemplate>
            </CollectionView.ItemTemplate>
        </CollectionView>
        
        <Border Grid.Row="2" Style="{StaticResource TabBarStyle}">
            <HorizontalStackLayout Spacing="30" HorizontalOptions="Center">
                <ImageButton Source="home_icon" Command="{Binding GoHomeCommand}"/>
                <ImageButton Source="search_icon" Command="{Binding SearchCommand}"/>
                <ImageButton Source="profile_icon" Command="{Binding ProfileCommand}"/>
            </HorizontalStackLayout>
        </Border>
    </Grid>
</ContentPage>`,
    videoUrl: 'assets/videos/Calender.mp4',
  },
  health: {
    title: 'Student Health Booking System',
    description: 'Full-stack healthcare booking platform with role-based access control built for University of Limpopo.',
    details: [
      '🏥 Built with JHipster, Angular, Spring Boot, and MySQL',
      '🔐 RBAC implementation for 4 user roles (Students, Nurses, Admins, Directors)',
      '📡 RESTful APIs for appointment booking and management',
      '⏰ Real-time availability checking and conflict prevention',
      '📊 Comprehensive testing and documentation'
    ],
    codeSnippet: `// Spring Boot REST Controller Example
@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;
    
    @PostMapping("/book")
    public ResponseEntity<?> bookAppointment(@Valid @RequestBody AppointmentRequest request) {
        try {
            Appointment appointment = appointmentService.bookAppointment(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(appointment);
        } catch (BookingConflictException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
    
    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Appointment>> getStudentAppointments(@PathVariable Long studentId) {
        return ResponseEntity.ok(appointmentService.findByStudentId(studentId));
    }
    
    @GetMapping("/available-slots")
    public ResponseEntity<List<TimeSlot>> getAvailableSlots(@RequestParam LocalDate date) {
        return ResponseEntity.ok(appointmentService.findAvailableSlots(date));
    }
}`
  },
  accommodation: {
    title: 'Student Accommodation App',
    description: 'Cross-platform mobile app for finding verified student housing developed during training.',
    details: [
      '📱 Developed with C# and .NET MAUI as part of training',
      '🔥 Firebase backend for real-time data synchronization',
      '🔍 Advanced search and filter functionality',
      '✅ Verified listings to prevent scams',
      '💬 In-app messaging between students and landlords'
    ],
    codeSnippet: `// Firebase Integration for Accommodation App
public class AccommodationService
{
    private FirebaseClient firebase;
    private const string FIREBASE_URL = "https://your-project.firebaseio.com/";
    
    public AccommodationService()
    {
        firebase = new FirebaseClient(FIREBASE_URL);
    }
    
    public async Task<List<Property>> SearchProperties(string location, decimal maxPrice, int bedrooms)
    {
        var allProperties = await firebase
            .Child("properties")
            .OnceAsync<Property>();
            
        return allProperties
            .Select(p => p.Object)
            .Where(p => p.Location.Contains(location) 
                        && p.Price <= maxPrice 
                        && p.Bedrooms >= bedrooms
                        && p.IsVerified)
            .ToList();
    }
    
    public async Task<bool> SubmitBookingInquiry(string propertyId, Inquiry inquiry)
    {
        try
        {
            await firebase
                .Child("inquiries")
                .PostAsync(inquiry);
            return true;
        }
        catch
        {
            return false;
        }
    }
}`
  },
  library: {
    title: 'Library & Lab Booking System',
    description: 'Multi-facility scheduling platform with conflict resolution built for university operations.',
    details: [
      '📚 Java Spring Boot backend with Angular frontend',
      '✅ Advanced validation logic preventing double-booking',
      '🔄 Real-time availability updates',
      '📧 Email notifications for booking confirmations',
      '👑 Admin dashboard for facility management'
    ],
    codeSnippet: `// Booking Validation Logic - Spring Boot
@Service
@Transactional
public class BookingService {
    
    @Autowired
    private BookingRepository bookingRepository;
    
    public boolean isTimeSlotAvailable(Long facilityId, LocalDateTime start, LocalDateTime end) {
        List<Booking> existingBookings = bookingRepository
            .findByFacilityIdAndTimeRange(facilityId, start, end);
        
        // Check for overlapping bookings
        return existingBookings.stream().noneMatch(booking ->
            (start.isBefore(booking.getEndTime()) && end.isAfter(booking.getStartTime()))
        );
    }
    
    public Booking createBooking(BookingRequest request) {
        if (!isTimeSlotAvailable(request.getFacilityId(), 
                                  request.getStartTime(), 
                                  request.getEndTime())) {
            throw new BookingConflictException("Time slot is already booked");
        }
        
        Booking booking = new Booking();
        booking.setFacilityId(request.getFacilityId());
        booking.setUserId(request.getUserId());
        booking.setStartTime(request.getStartTime());
        booking.setEndTime(request.getEndTime());
        booking.setStatus(BookingStatus.CONFIRMED);
        
        return bookingRepository.save(booking);
    }
}`
  },
  weather: {
    title: 'Weather Web Application',
    description: 'Real-time weather app with API integration and responsive design.',
    details: [
      '🌤️ Pure HTML5, CSS3, and JavaScript implementation',
      '🔗 Integration with OpenWeatherMap API',
      '📱 Responsive design for all devices',
      '🔄 Dynamic DOM updates based on user input',
      '📊 Display of temperature, humidity, and weather conditions'
    ],
    codeSnippet: `// Weather API Integration - JavaScript
const API_KEY = 'your_api_key_here';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const url = \`\${API_URL}?q=\${encodeURIComponent(city)}&appid=\${API_KEY}&units=metric\`;
    
    try {
        showLoading();
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

function displayWeatherData(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = \`\${Math.round(data.main.temp)}°C\`;
    document.getElementById('humidity').textContent = \`\${data.main.humidity}%\`;
    document.getElementById('wind-speed').textContent = \`\${data.wind.speed} km/h\`;
    document.getElementById('condition').textContent = data.weather[0].description;
    document.getElementById('weather-icon').src = \`https://openweathermap.org/img/w/\${data.weather[0].icon}.png\`;
}`,
    videoUrl: 'assets/videos/weather.mp4',
  }
};


function viewProjectDetails(projectId) {
  const project = projectData[projectId];
  if (!project) {
    console.error('Project not found:', projectId);
    return;
  }
  
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = project.title;
  
  const hasVideo = project.videoUrl && (projectId === 'ecommerce' || projectId === 'clone' || projectId === 'weather');
  
  let html = '';
  
  if (hasVideo) {
    html += `
      <div class="project-detail-section">
        <h4>🎬 Video Showcase</h4>
        <div class="video-container">
          <video width="100%" controls>
            <source src="${project.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p class="video-caption">Demo showcase of the ${project.title}</p>
        </div>
      </div>
    `;
  }
  
  html += `
    <div class="project-detail-section">
      <h4>📋 Description</h4>
      <p>${project.description}</p>
    </div>
    
    <div class="project-detail-section">
      <h4>✨ Key Features</h4>
      <ul>
        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
    </div>
    
    <div class="project-detail-section">
      <h4>💻 Code Sample</h4>
      <div class="code-block">
        <pre>${escapeHtml(project.codeSnippet)}</pre>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = html;
  modal.style.display = 'block';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
}


async function sendMessage() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMsg').value;
  
  if (!name || !email || !message) {
    alert('❌ Please fill in all fields');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('❌ Please enter a valid email address');
    return;
  }
  
  
  if (typeof emailjs === 'undefined') {
    alert('❌ Email service is loading. Please wait a moment and try again.');
    return;
  }
  
  const btn = document.querySelector('.contact-form .btn-primary');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending...';
  btn.style.background = '#1a7a4a';
  btn.disabled = true;
  
  try {
    const templateParams = {
      name: name,
      email: email,
      message: message
    };
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID, 
      EMAILJS_CONFIG.TEMPLATE_ID, 
      templateParams
    );
    
    console.log('✅ Email sent!', response);
    btn.textContent = '✓ Message Sent!';
    
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMsg').value = '';
    
    alert('✅ Your message has been sent successfully! I will get back to you soon.');
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
    
  } catch (error) {
    console.error('❌ Error:', error);
    alert('❌ Failed to send message. Please email me directly at katlegokatenguyuza01@gmail.com');
    
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
  }
}


window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}


function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.classList.toggle('menu-open');
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  body.classList.remove('menu-open');
}


document.addEventListener('click', function(event) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  const isClickInsideNav = navLinks && navLinks.contains(event.target);
  const isClickOnHamburger = hamburger && hamburger.contains(event.target);
  
  if (navLinks && navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
    closeMobileMenu();
  }
});


window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      closeMobileMenu();
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  });
});


window.viewProjectDetails = viewProjectDetails;
window.closeModal = closeModal;
window.sendMessage = sendMessage;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;