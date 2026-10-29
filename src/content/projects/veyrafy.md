---
title: Veyrafy
metaTitle: 'Veyrafy: Supplier Invoice Verification Product | Antony Pratap'
description: Veyrafy is my own invoice verification product. It reads supplier invoices, checks them against business records and asks a person when something does not match.
summary: My own product for verifying supplier invoices. It reads invoices, checks them against purchase orders, goods receipts and supplier records, and asks a person when something does not match.
order: 1
ownership: own-product
ownershipLabel: My own product
status: In active development
services:
  - ai-automation
  - business-process-automation
  - business-systems-integration
  - custom-software-development
tags: [Invoice verification, Document extraction, ERP integration, Finance automation]
screenshots:
  - src: ../../assets/projects/veyrafy-invoice-ready.png
    alt: Veyrafy screen showing a supplier tax invoice beside the values it read, marked Invoice ready after the order, goods receipt and invoice agreed
    caption: An invoice that matches its purchase order and goods receipt is marked ready, with the original document alongside. Demo data.
  - src: ../../assets/projects/veyrafy-quantity-mismatch.png
    alt: Veyrafy screen showing an invoice that bills 4,000 units more than the purchase order, with the difference explained and options to resolve it
    caption: An invoice that bills more than was ordered is stopped and explained. There is no override. Demo data.
---

## The business problem

Finance teams check supplier invoices against purchase orders, goods receipts and supplier records before they can be paid. The work is repetitive and slow, and mistakes are expensive: duplicate payments, payments for goods never received, or prices that differ from what was agreed.

## What Veyrafy does

Veyrafy takes a supplier invoice from upload to a clear outcome: verified and ready for the business's own payment process, or held with a specific question for a person to answer.

The workflow is: **read → find → use → validate → ask a person when uncertain**. The principle is that the system never guesses. If information is unclear or does not match the business records, it becomes a question rather than an assumption.

## Implemented capabilities

- **Reading invoices.** PDFs with a text layer are read directly. Scanned PDFs, JPEG and PNG images are read with OCR running locally.
- **Grounded AI assistance (optional).** A locally hosted language model may suggest values for fields the parser could not find, but only by quoting text printed on the document. Every suggestion is shown to a person to confirm.
- **Matching and validation.** Deterministic business rules check invoices against suppliers, items, purchase orders and goods receipts.
- **Questions instead of guesses.** Discrepancies and missing information are presented to the responsible person as decisions, with the evidence.
- **Excel and CSV data bridge.** Businesses without a connected ERP can import suppliers, items, purchase orders and goods receipts from validated templates, and export invoices, decisions and the audit trail.
- **Read-only ERP connection.** A generic connector reads suppliers, items, orders and receipts from an ERP's REST/JSON API with configurable field mapping, encrypted credentials and safeguards on outgoing requests.
- **Security foundations.** Sign-in with server-side sessions, role-based access enforced by the server, audit trails, and encryption of stored documents at rest.

## Current status and limitations

Veyrafy is in active development. To be precise about what is and is not proven:

- ERP connectivity has been demonstrated with a built-in example ERP and the generic read-only connector. Integration with a specific customer's ERP has **not** yet been verified in production.
- Veyrafy does not make or approve payments. A verified invoice is handed to the business's own payment process.
- There has been no independent security audit or penetration test yet.

## My role

Veyrafy is my product. I defined the problem, the business rules and the product, and lead its design, architecture and delivery using AI-assisted development.
