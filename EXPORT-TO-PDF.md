# How to Export the Migration Plan to PDF

## Option 1: From HTML (Recommended)

1. Open `MIGRATION-PLAN.html` in your browser (double-click or drag into Chrome/Safari/Firefox).
2. Press **Cmd+P** (Mac) or **Ctrl+P** (Windows/Linux) to print.
3. In the print dialog, choose **Save as PDF** or **Print to PDF** as the destination.
4. Click Save and choose where to save `MIGRATION-PLAN.pdf`.

## Option 2: From Markdown (VS Code / Cursor)

1. Install the **Markdown PDF** extension (by yzane).
2. Open `MIGRATION-PLAN.md`.
3. Right-click in the editor → **Markdown PDF: Export (pdf)**.
4. PDF saves in the same folder.

## Option 3: Command line (if md-to-pdf is installed)

```bash
cd /Users/ajaymadan/Documents/GitHub/Ajay-Professional-Website
npx md-to-pdf MIGRATION-PLAN.md --dest MIGRATION-PLAN.pdf
```

Note: First run may take a minute while Puppeteer downloads.
