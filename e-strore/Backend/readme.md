# E-commerce Multi-Vendor Platform API
## 🏗️ Project Architecture
### User Roles
- **Admin**: Platform management, seller approval, dispute resolution, system configuration
- **Seller**: Product management, order fulfillment, store customization, earnings tracking
- **Customer**: Shopping, reviews, order tracking, profile management


## 📊 Complete API Endpoints

### 🔑 Authentication Routes
```
POST   /api/auth/register          # User registration (customer)
POST   /api/auth/login             # User login (all roles)
POST   /api/auth/logout            # User logout
POST   /api/auth/refresh-token     # Refresh JWT token
POST   /api/auth/forgot-password   # Request password reset
POST   /api/auth/reset-password    # Reset password with token
POST   /api/auth/verify-email      # Verify email address
POST   /api/auth/seller/register   # Seller registration with business info
GET    /api/auth/me                # Get current user profile
```

### 👤 User/Customer Routes
```
GET    /api/users/profile          # Get user profile
PUT    /api/users/profile          # Update user profile
POST   /api/users/avatar           # Upload profile picture
DELETE /api/users/account          # Delete user account

# Address Management
GET    /api/users/addresses        # List user addresses
POST   /api/users/addresses        # Add new address
PUT    /api/users/addresses/:id    # Update address
DELETE /api/users/addresses/:id    # Delete address
PUT    /api/users/addresses/:id/default # Set default address

# Customer Order Management
GET    /api/users/orders           # Customer's order history
GET    /api/users/orders/:id       # Specific order details
POST   /api/users/orders/:id/cancel # Cancel order (if allowed)
POST   /api/users/orders/:id/return # Request return/refund

# Wishlist & Favorites
GET    /api/users/wishlist         # Get user's wishlist
POST   /api/users/wishlist         # Add product to wishlist
DELETE /api/users/wishlist/:productId # Remove from wishlist

# Customer Reviews
GET    /api/users/reviews          # User's written reviews
POST   /api/users/reviews          # Write product review
PUT    /api/users/reviews/:id      # Edit review
DELETE /api/users/reviews/:id      # Delete review

# User Preferences
GET    /api/users/preferences      # Get user preferences
PUT    /api/users/preferences      # Update preferences
```

### 🛒 Shopping Cart Routes
```
GET    /api/cart                   # Get user's cart
POST   /api/cart/items             # Add item to cart
PUT    /api/cart/items/:id         # Update cart item quantity
DELETE /api/cart/items/:id         # Remove item from cart
DELETE /api/cart                   # Clear entire cart
POST   /api/cart/merge             # Merge guest cart with user cart
GET    /api/cart/summary           # Get cart summary with totals
```

### 🏪 Seller Routes
```
# Seller Dashboard & Profile
GET    /api/seller/dashboard       # Seller analytics dashboard
GET    /api/seller/profile         # Get seller business profile
PUT    /api/seller/profile         # Update seller business info
POST   /api/seller/documents       # Upload verification documents

# Product Management
GET    /api/seller/products        # List seller's products
POST   /api/seller/products        # Create new product
PUT    /api/seller/products/:id    # Update own product
DELETE /api/seller/products/:id    # Delete own product
POST   /api/seller/products/:id/images # Upload product images

# Order Management
GET    /api/seller/orders          # Orders for seller's products
PUT    /api/seller/orders/:id/status # Update order fulfillment status
GET    /api/seller/orders/:id      # Get detailed order info
POST   /api/seller/orders/:id/tracking # Add tracking information

# Inventory Management
GET    /api/seller/inventory       # Inventory overview
PUT    /api/seller/inventory/:productId # Update product stock
GET    /api/seller/inventory/alerts # Low stock alerts

# Financial Management
GET    /api/seller/earnings        # Seller earnings after commission
GET    /api/seller/transactions    # Transaction history
POST   /api/seller/payout/request  # Request payout
GET    /api/seller/payouts         # Payout history

# Store Customization
GET    /api/seller/store           # Get store settings
PUT    /api/seller/store           # Update store appearance
POST   /api/seller/store/logo      # Upload store logo
POST   /api/seller/store/banner    # Upload store banner

# Analytics & Reports
GET    /api/seller/analytics       # Sales and performance analytics
GET    /api/seller/reports/sales   # Sales reports
GET    /api/seller/reports/products # Product performance reports
```

### 👑 Admin Routes
```
# Platform Management
GET    /api/admin/dashboard        # Platform-wide analytics
GET    /api/admin/stats            # Platform statistics

# User Management
GET    /api/admin/users            # List all users with filters
GET    /api/admin/users/:id        # Get user details
PUT    /api/admin/users/:id/status # Ban/unban users
DELETE /api/admin/users/:id        # Delete user account

# Seller Management
GET    /api/admin/sellers          # List all sellers with status
GET    /api/admin/sellers/:id      # Get seller details
PUT    /api/admin/sellers/:id/status # Approve/reject/suspend sellers
POST   /api/admin/sellers/:id/verify # Verify seller documents
GET    /api/admin/sellers/pending  # Pending seller applications

# Product Management
GET    /api/admin/products         # List all products
PUT    /api/admin/products/:id/status # Approve/reject products
DELETE /api/admin/products/:id     # Remove products from platform

# Category Management
GET    /api/admin/categories       # List all categories
POST   /api/admin/categories       # Create new category
PUT    /api/admin/categories/:id   # Update category
DELETE /api/admin/categories/:id   # Delete category

# Order Management
GET    /api/admin/orders           # List all platform orders
GET    /api/admin/orders/:id       # Get order details
PUT    /api/admin/orders/:id/status # Update order status
POST   /api/admin/orders/:id/refund # Process refunds

# Dispute Management
GET    /api/admin/disputes         # List all disputes
GET    /api/admin/disputes/:id     # Get dispute details
PUT    /api/admin/disputes/:id/resolve # Resolve dispute
POST   /api/admin/disputes/:id/action # Take action on dispute

# Financial Management
GET    /api/admin/revenue          # Platform revenue analytics
GET    /api/admin/commissions      # Commission tracking
GET    /api/admin/payouts          # Seller payout management
POST   /api/admin/payouts/:id/process # Process seller payouts

# Platform Configuration
GET    /api/admin/settings         # Platform settings
PUT    /api/admin/settings         # Update platform settings
PUT    /api/admin/commission-rates # Update commission rates
```

### 🛍️ Public Product Routes
```
GET    /api/products               # List products with filters
GET    /api/products/:id           # Get product details
GET    /api/products/:id/reviews   # Get product reviews
GET    /api/products/:id/related   # Get related products
GET    /api/products/search        # Advanced product search
GET    /api/products/featured      # Get featured products
GET    /api/products/trending      # Get trending products

# Category Routes
GET    /api/categories             # List all categories
GET    /api/categories/:id/products # Products in category
```

### 📦 Order Processing Routes  
```
POST   /api/orders                 # Create new order
GET    /api/orders/:id             # Get order details
PUT    /api/orders/:id/status      # Update order status
POST   /api/orders/:id/dispute     # Raise order dispute
GET    /api/orders/:id/tracking    # Get tracking information
```

### 💳 Payment Routes
```
POST   /api/payments/create-intent # Create Stripe payment intent
POST   /api/payments/confirm       # Confirm payment
POST   /api/payments/webhook       # Stripe webhook handler
GET    /api/payments/:id/status    # Check payment status
POST   /api/payments/refund        # Process refund
```

### 🏬 Public Seller Store Routes
```
GET    /api/stores/:sellerId       # Public seller storefront
GET    /api/stores/:sellerId/products # Seller's products
GET    /api/stores/:sellerId/reviews # Seller reviews
POST   /api/stores/:sellerId/reviews # Rate seller
```

## 💰 Business Logic Features

### Commission System
- **Configurable Rates**: Different commission percentages per product category
- **Real-time Calculation**: Automatic deduction from seller earnings
- **Transparent Reporting**: Clear breakdown of fees for sellers
- **Multi-tier Structure**: Volume-based commission discounts for high-performing sellers

### Multi-Vendor Order Management
- **Order Splitting**: Automatic separation of orders by seller
- **Independent Fulfillment**: Each seller manages their portion independently  
- **Consolidated Tracking**: Customers see unified order status
- **Individual Shipping**: Separate shipping costs and methods per seller
- **Partial Cancellations**: Cancel items from specific sellers without affecting others

### Seller Verification Process
1. **Initial Registration**: Basic business information and contact details
2. **Document Upload**: Business license, tax ID, bank account verification
3. **Identity Verification**: Government ID and address proof
4. **Admin Review**: Manual verification of all submitted documents
5. **Approval/Rejection**: Email notification with feedback
6. **Ongoing Compliance**: Regular performance and policy adherence monitoring


## 🗄️ Database Schema Overview

### Users Collection
```typescript
{
  _id: ObjectId,
  firstName: string,
  lastName: string,
  email: string,
  password: string, // bcrypt hashed
  role: 'admin' | 'seller' | 'customer',
  isActive: boolean,
  isEmailVerified: boolean,
  avatar?: string,
  
  // Customer-specific fields
  addresses?: [{
    _id: ObjectId,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
    isDefault: boolean
  }],
  wishlist?: ObjectId[],
  preferences?: {
    emailNotifications: boolean,
    smsNotifications: boolean,
    currency: string,
    language: string
  },
  
  // Seller-specific fields
  businessInfo?: {
    businessName: string,
    businessType: 'individual' | 'company' | 'partnership',
    taxId: string,
    businessAddress: object,
    bankDetails: object, // encrypted
    website?: string,
    description?: string
  },
  sellerStatus?: 'pending' | 'approved' | 'rejected' | 'suspended',
  verificationDocuments?: string[],
  storeSettings?: {
    storeName: string,
    logo?: string,
    banner?: string,
    theme: object,
    policies: {
      returns: string,
      shipping: string,
      privacy: string
    }
  },
  
  createdAt: Date,
  updatedAt: Date
}
```

### Products Collection
```typescript
{
  _id: ObjectId,
  name: string,
  description: string,
  shortDescription?: string,
  price: number,
  comparePrice?: number,
  cost?: number, // for profit calculation
  category: string,
  subcategory?: string,
  brand?: string,
  sku: string,
  barcode?: string,
  
  sellerId: ObjectId, // Reference to seller
  
  inventory: {
    quantity: number,
    lowStockThreshold: number,
    trackQuantity: boolean,
    allowBackorder: boolean
  },
  
  images: [{
    url: string,
    alt?: string,
    isMain: boolean
  }],
  
  specifications: Map<string, string>,
  tags: string[],
  
  seo: {
    title?: string,
    description?: string,
    keywords?: string[]
  },
  
  shipping: {
    weight: number,
    dimensions: {
      length: number,
      width: number,
      height: number
    },
    freeShipping: boolean,
    shippingClass?: string
  },
  
  isActive: boolean,
  isApproved: boolean,
  isFeatured: boolean,
  
  rating: {
    average: number,
    count: number,
    distribution: {
      1: number,
      2: number, 
      3: number,
      4: number,
      5: number
    }
  },
  
  salesCount: number,
  viewsCount: number,
  
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Collection
```typescript
{
  _id: ObjectId,
  orderNumber: string, // Human-readable order ID
  customerId: ObjectId,
  
  // Multi-vendor order structure
  sellers: [{
    sellerId: ObjectId,
    items: [{
      productId: ObjectId,
      name: string,
      price: number,
      quantity: number,
      sku: string,
      image: string
    }],
    subtotal: number,
    shippingCost: number,
    tax: number,
    total: number,
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled',
    trackingNumber?: string,
    shippingMethod?: string,
    estimatedDelivery?: Date,
    actualDelivery?: Date
  }],
  
  shippingAddress: {
    firstName: string,
    lastName: string,
    company?: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string,
    phone?: string
  },
  
  billingAddress: object, // Same structure as shipping
  
  paymentInfo: {
    method: 'stripe' | 'paypal' | 'cod',
    transactionId?: string,
    status: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded',
    paidAt?: Date
  },
  
  totals: {
    subtotal: number,
    shipping: number,
    tax: number,
    discount: number,
    total: number,
    platformCommission: number
  },
  
  notes?: string,
  internalNotes?: string,
  
  createdAt: Date,
  updatedAt: Date
}
```

### Reviews Collection
```typescript
{
  _id: ObjectId,
  productId: ObjectId,
  sellerId: ObjectId,
  customerId: ObjectId,
  orderId: ObjectId, // Verify purchase
  
  rating: number, // 1-5
  title?: string,
  comment?: string,
  images?: string[],
  
  isVerifiedPurchase: boolean,
  isApproved: boolean,
  
  helpfulVotes: number,
  reportedCount: number,
  
  sellerResponse?: {
    message: string,
    respondedAt: Date
  },
  
  createdAt: Date,
  updatedAt: Date
}
```

### Categories Collection
```typescript
{
  _id: ObjectId,
  name: string,
  slug: string,
  description?: string,
  parentId?: ObjectId, // For subcategories
  
  image?: string,
  icon?: string,
  
  seo: {
    title?: string,
    description?: string,
    keywords?: string[]
  },
  
  isActive: boolean,
  sortOrder: number,
  
  commissionRate: number, // Platform commission for this category
  
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Features

### Data Protection
- **Password Security**: bcrypt hashing with salt rounds
- **JWT Security**: Signed tokens with expiration and refresh mechanism
- **Data Encryption**: Sensitive data (bank details) encrypted at rest
- **Input Validation**: Joi schema validation for all endpoints
- **SQL Injection Prevention**: Mongoose ODM with parameterized queries
- **XSS Protection**: Input sanitization and output encoding

### API Security
- **Rate Limiting**: Configurable limits per endpoint and user role
- **CORS Configuration**: Restricted cross-origin requests
- **Security Headers**: Helmet.js for HTTP security headers
- **Request Size Limits**: File upload and payload size restrictions
- **Authentication Middleware**: JWT token validation on protected routes
- **Authorization Checks**: Role-based and resource ownership validation

### Role-Based Security
- **Endpoint Protection**: Route-level role authorization
- **Data Isolation**: Users can only access their own data
- **Seller Verification**: Status checks before allowing seller operations
- **Admin Privileges**: Elevated access with audit logging
- **Resource Ownership**: Sellers can only modify their own products/orders

## 📧 Email Notification System

### Automated Email Types
- **Account Management**: Welcome, email verification, password reset
- **Seller Lifecycle**: Application received, approved/rejected, suspended
- **Order Management**: Order confirmation, status updates, delivery confirmation
- **Payment Notifications**: Payment successful, failed, refund processed
- **Review Alerts**: New review received, review response
- **Marketing**: Product recommendations, promotional offers (opt-in)

### Email Templates
- **Responsive Design**: Mobile-friendly HTML templates
- **Brand Customization**: Platform and seller branding
- **Multi-language Support**: Localized content based on user preferences
- **Personalization**: Dynamic content based on user data

## 💳 Payment Integration


### Admin Analytics Dashboard
- **Revenue Metrics**: Total sales, commission earned, growth trends
- **User Analytics**: Registration rates, active users, retention metrics
- **Seller Performance**: Top sellers, approval rates, performance scores
- **Product Insights**: Best-selling products, category performance
- **Order Analytics**: Order volume, average order value, fulfillment metrics
- **Geographic Data**: Sales by region, shipping analytics

### Seller Analytics Dashboard
- **Sales Performance**: Revenue trends, order volume, conversion rates
- **Product Analytics**: Top products, inventory turnover, profit margins
- **Customer Insights**: Repeat customers, demographics, behavior patterns
- **Marketing Metrics**: Traffic sources, search rankings, promotional effectiveness
- **Operational Data**: Fulfillment times, return rates, customer satisfaction


## 📋 Development Roadmap

### Phase 1: Foundation (Weeks 1-3) ✅
- [x] Project setup and configuration
- [x] Database schema design
- [x] User authentication system
- [x] Basic CRUD operations
- [x] Role-based access control

### Phase 2: Core E-commerce (Weeks 4-6) 🚧
- [x] Product management system
- [x] Shopping cart functionality
- [x] Order processing workflow
- [ ] Payment integration
- [ ] Email notification system

### Phase 3: Multi-vendor Features (Weeks 7-9) 📋
- [ ] Seller registration and approval
- [ ] Multi-vendor order splitting
- [ ] Commission calculation system
- [ ] Seller dashboard and analytics
- [ ] Store customization features

### Phase 4: Advanced Features (Weeks 10-12) 📋
- [ ] Advanced search and filtering
- [ ] Review and rating system
- [ ] Dispute management
- [ ] Inventory management
- [ ] Recommendation engine

### Phase 5: Optimization & Scaling (Weeks 13-16) 📋
- [ ] Performance optimization
- [ ] Caching implementation
- [ ] API documentation (Swagger)
- [ ] Load testing and optimization
- [ ] Security audit and hardening


POST /api/auth/register
{
    "firstName": "John",
    "lastName": "Doe", 
    "email": "john@example.com",
    "password": "Password123",
    "confirmPassword": "Password123"
}

### Seller Registration Request:

POST /api/auth/seller/register
{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@business.com", 
    "password": "Password123",
    "confirmPassword": "Password123",
    "businessName": "Jane's Store",
    "businessType": "company",
    "taxId": "123456789",
    "businessAddress": {
        "street": "123 Business St",
        "city": "Business City",
        "state": "BC",
        "zipCode": "12345",
        "country": "USA"
    },
    "website": "https://janesstore.com",
    "description": "We sell quality products"
}




# Admin Authentication System Guide
🔐 Admin Login Methods
Method 1: Secret Key Registration (Recommended)
Endpoint: POST /api/auth/admin/register
json{
  "firstName": "John",
  "lastName": "Admin",
  "email": "admin@yourplatform.com",
  "password": "SecureAdmin123",
  "confirmPassword": "SecureAdmin123",
  "adminSecretKey": "your-secret-admin-key"
}
How it works:

Requires a secret key (ADMIN_SECRET_KEY) in environment variables
Only people with the secret key can create admin accounts
First admin becomes "Super Admin" with full permissions
Subsequent admins have standard permissions

🏗️ Admin Hierarchy
Super Admin

First admin created automatically becomes super admin
Full platform control - can do everything
Can create other admins with standard permissions
Cannot be deleted by other admins
Ultimate authority in disputes and decisions

Standard Admin

Platform management - user management, seller approval, etc.
Cannot create other admins (only super admin can)
Can be managed by super admin
Standard permissions for day-to-day operations

🔄 Complete Login Flow
javascript// Step 1: Admin registers (one-time setup)
POST /api/auth/admin/register
{
  "firstName": "John",
  "lastName": "Admin", 
  "email": "john@admin.com",
  "password": "SecurePass123",
  "confirmPassword": "SecurePass123",
  "adminSecretKey": "your-secret-key"
}

// Step 2: Admin logs in (same as everyone else)
POST /api/auth/login
{
  "email": "john@admin.com",
  "password": "SecurePass123"
}

// Response includes admin-specific data
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Admin",
    "email": "john@admin.com",
    "role": "admin",
    "isSuperAdmin": true,
    "isEmailVerified": true
  },
  "tokens": {
    "accessToken": "...",
    "refreshToken": "..."
  }
}
🛡️ Security Features
Admin Registration Security

Secret Key Protection - Only people with secret key can register
Environment Variable - Secret key stored securely
Production Safety - Setup endpoint disabled in production
One-time Super Admin - Only first admin becomes super admin

Admin Access Control

Role-based Authentication - Different permissions for super vs standard admin
Token-based Security - Same JWT system as other users
Account Status Checks - Active account verification
Audit Trail - Track admin actions (implement later)

📝 Environment Variables Required
env# JWT Security
JWT_SECRET=your-jwt-secret-key-here
JWT_REFRESH_SECRET=your-refresh-secret-key-here

# Admin Registration
ADMIN_SECRET_KEY=your-admin-registration-secret-key

# Database
MONGODB_URI=mongodb://localhost:27017/your-database

# Environment
NODE_ENV=development
🚀 Deployment Strategy
Development Environment

Use POST /api/auth/setup/super-admin to create first admin
Or use secret key registration
Both methods available

Production Environment

Setup endpoint disabled automatically
Only secret key registration available
Manually create first admin via database if needed
Share secret key only with trusted team members

🔒 Best Practices
Security

Keep secret key private - Don't commit to version control
Use strong passwords - Minimum 8 characters for admins
Rotate secret keys periodically
Monitor admin actions (implement audit logging)

Account Management

Create super admin first - They have full control
Limit admin accounts - Only create what you need
Regular password updates - Enforce strong password policies
Deactivate unused accounts - Keep active admin list clean

📋 Admin Capabilities
Based on your API documentation, admins can:
Platform Management

View dashboard and analytics
Manage platform settings
Configure commission rates
Monitor system health

User Management

List and manage all users
Ban/unban user accounts
Delete user accounts
View user details and activity

Seller Management

Approve/reject seller applications
Suspend seller accounts
Verify seller documents
Manage seller performance

Product Management

Approve/reject products
Remove products from platform
Manage product categories
Monitor product quality

Order Management

View all platform orders
Process refunds
Handle disputes
Manage order issues

Financial Management

Track platform revenue
Manage seller payouts
Monitor commission collection
Generate financial reports

🔄 Login Process Summary

Admin Registration (one-time):

Use secret key to register admin account
First admin becomes super admin automatically


Admin Login (daily use):

Same login endpoint as customers/sellers: POST /api/auth/login
System recognizes admin role automatically
Returns admin-specific permissions and data


Admin Access:

Use JWT tokens for authenticated requests
Role-based middleware protects admin routes
Super admin has elevated privileges



The beauty of this system is that all roles use the same login endpoint, but the system automatically handles the different permissions and access levels based on the user's role and status.