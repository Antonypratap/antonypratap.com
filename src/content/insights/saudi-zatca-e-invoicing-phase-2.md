---
title: 'Saudi Arabia E-Invoicing Phase 2 (ZATCA): What Integration Involves'
metaTitle: 'ZATCA Phase 2 E-Invoicing: What Integration Involves'
description: 'A systems-focused guide to ZATCA Phase 2 e-invoicing in Saudi Arabia: integration waves, the Fatoora platform, clearance and reporting, and how to prepare your ERP.'
answer: 'ZATCA Phase 2 requires Saudi VAT-registered businesses, in waves announced in advance, to integrate their invoicing systems with ZATCA''s Fatoora platform. Standard B2B invoices are cleared by ZATCA before being shared; simplified B2C invoices are reported after issue. Invoices must be structured XML with a cryptographic stamp and QR code, from a solution onboarded with ZATCA.'
topic: Systems integration
published: 2026-11-06
relatedServices:
  - business-systems-integration
  - technology-consulting
---

Saudi Arabia was one of the first countries in the region to make e-invoicing mandatory. Phase 1, which required invoices to be generated electronically, applied to all VAT-registered businesses from December 2021. Phase 2, the **integration phase**, connects businesses' invoicing systems directly to the Zakat, Tax and Customs Authority's (ZATCA) **Fatoora** platform, and is being rolled out in waves.

This guide covers what Phase 2 means for your systems. For tax and legal questions, take advice from a tax professional, and always check current requirements on ZATCA's website.

## How the waves work

ZATCA brings businesses into Phase 2 in waves, based on their revenue in earlier years. Each wave is announced in advance (ZATCA has said at least six months ahead), and businesses in it must complete integration by the stated date. Later waves have reached progressively smaller businesses. Wave 25, announced in July 2026, has a go-live date of 1 February 2027.

If you are VAT-registered in Saudi Arabia, check ZATCA's announcements regularly so that a notification does not arrive with too little time to prepare.

## What integration means

In Phase 2, invoices are not simply created electronically. They are exchanged with ZATCA:

- **Standard tax invoices** (business-to-business) go through **clearance**: the invoice is submitted to ZATCA and validated before it is shared with the buyer.
- **Simplified tax invoices** (business-to-consumer) go through **reporting**: they are issued to the customer and then reported to ZATCA within the time limit ZATCA sets.

Invoices must be produced in ZATCA's structured XML format, carry the required fields, a cryptographic stamp and a QR code, and come from a solution that has been registered and onboarded with ZATCA.

## What to prepare in your systems

1. **Confirm your solution can do it.** Many ERP and accounting vendors offer ZATCA-compliant modules, and specialist providers offer middleware that connects other systems. Check that yours supports your invoice types and volumes.
2. **Map your invoice data.** Every required field, for every invoice type, including credit and debit notes.
3. **Clean your master data.** Buyer VAT numbers, addresses and item details must be complete and accurate.
4. **Onboard each device or system.** Every system that issues invoices must be registered with ZATCA.
5. **Plan for failures.** Decide what happens if a clearance request fails or the connection is down, and who resolves rejections.
6. **Test with real scenarios** in ZATCA's test environments before going live.

## Lessons for other markets

The UAE, Singapore and others are introducing their own e-invoicing systems. Businesses operating across the region benefit from treating e-invoicing as an integration capability rather than a series of one-off compliance projects. Read [UAE e-invoicing: what has to change in your systems](/insights/uae-e-invoicing-erp-accounting-systems/) for the UAE model.

For help connecting your systems, see [business systems integration](/services/business-systems-integration/).
