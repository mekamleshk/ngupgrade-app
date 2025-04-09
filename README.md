```markdown
# AngularJS + Angular 17 Hybrid App using ngUpgrade

A hybrid application demonstrating the integration of **AngularJS (1.8.3)** and **Angular 17** using `@angular/upgrade/static`. This project serves as a template for incremental migration from AngularJS to Angular.

![Hybrid App Demo](demo-screenshot.png)

## Features
- **Hybrid Bootstrapping**: Angular 17 boots first, then AngularJS
- **Service Sharing**: Angular services downgraded for AngularJS consumption
- **Component Interop**: Angular components downgraded to work in AngularJS templates
- **Unified Build**: Uses Angular CLI v17 for modern tooling

## Prerequisites
- Node.js v18+
- npm v9+
- Angular CLI v17 (`npm i -g @angular/cli@17`)
- AngularJS 1.8.3
- Angular 17

## Installation
```bash
git clone https://github.com/yourusername/ng17-ng1-hybrid-demo.git
cd ng17-ng1-hybrid-demo
npm install
ng serve
```

## Project Structure
```plaintext
src/
├── app/                   # Angular 17 Components/Services
│   ├── components/
│   ├── services/
│   └── app.module.ts
├── legacy/                # AngularJS Components
│   ├── components/
│   └── app.module.ajs.ts
├── main.ts                # Hybrid bootstrap
└── index.html
```

## Key Files
| File | Purpose |
|------|---------|
| `main.ts` | Bootstraps Angular first, then AngularJS |
| `app/app.module.ts` | Angular root module with UpgradeModule |
| `legacy/app.module.ajs.ts` | AngularJS module initialization |
| `app/services/legacy.service.ts` | Shared service (Angular → AngularJS) |
| `legacy/components/*` | AngularJS components |
| `app/components/*` | Angular components downgraded for AngularJS |

## Running the App
```bash
ng serve
```
Visit `http://localhost:4200` to see:
1. AngularJS component (red border)
2. Angular 17 component (blue border) embedded inside it
3. Shared service data flowing between frameworks

## Troubleshooting
**1. AngularJS Not Loading**
- Verify `angular.min.js` exists in `assets/js/`
- Check Network tab for 404 errors

**2. "Module legacyApp not found"**
- Ensure `legacy/app.module.ajs.ts` is imported first in `main.ts`

**3. "Tried to load AngularJS more than once"**
- Remove duplicate AngularJS script tags
- Clear browser cache

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add some feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
MIT License - see [LICENSE](LICENSE)

---

**Migration Guide**: [Angular Official Upgrade Documentation](https://angular.io/guide/upgrade)  
**AngularJS Docs**: [AngularJS 1.8 Documentation](https://docs.angularjs.org/api)
```

This README:
1. Clearly explains the hybrid architecture
2. Provides setup/usage instructions
3. Documents key implementation details
4. Includes troubleshooting for common issues
5. Follows standard GitHub repo conventions

Add a `demo-screenshot.png` showing the working hybrid UI (red AngularJS component containing blue Angular component) for visual confirmation.