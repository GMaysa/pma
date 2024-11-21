
# React TypeScript Project with Vite

This project is a **React TypeScript application** bootstrapped with **Vite**. It includes a product management feature that allows adding, editing, deleting, and searching products stored in local storage.

## Features

### **MVP (Minimum Viable Product)**
- ✅ **Display**: Show a list of products.
- ✅ **Add**: Add a new product.
- ✅ **Edit**: Edit existing products.
- ✅ **Delete**: Remove a product from the list.
- ✅ **Using Local Storage**: Data is persisted in the browser's local storage.
- ✅ **Responsive**: Make the UI responsive for different screen sizes.

### **Optional Features**
- ⬜ **Sorting**: Add sorting functionality for products.
- ✅ **Pagination**: Navigate through pages of products.
- ✅ **Search**: Filter products by name or category.
- ⬜ **Multiple Delete**: Delete multiple products at once.

---

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/react-vite-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-vite-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## Development

### Running the Development Server
To start the development server, run:
```bash
npm run dev
```
or
```bash
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Building for Production

To build the project for production:
```bash
npm run build
```
or
```bash
yarn build
```

The production-ready files will be available in the `dist` folder.

---

## Project Structure

Here is an overview of the project's folder structure:

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── styles/           # Global and component-specific styles
│   ├── App.tsx           # Main application entry point
│   ├── main.tsx          # Vite application bootstrap file
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── package.json          # Dependency and scripts configuration
├── vite.config.ts        # Vite configuration
```

---

## Tasks

### To-Do List
Here is a summary of features and tasks implemented:

#### MVP
- [x] Display
- [x] Add
- [x] Edit
- [x] Delete
- [x] Using Local Storage
- [x] Responsive

#### Optional
- [ ] Sorting
- [x] Pagination
- [x] Search (name or category)
- [ ] Multiple Delete

---

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
