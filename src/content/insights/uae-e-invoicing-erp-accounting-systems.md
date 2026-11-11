---
title: 'UAE E-Invoicing: What Has to Change in Your ERP and Accounting Systems'
metaTitle: 'UAE E-Invoicing: Preparing Your ERP and Accounting Systems'
description: 'A practical guide to UAE e-invoicing for finance and operations teams: the Peppol model, the Accredited Service Provider and what to change in your systems.'
answer: 'UAE e-invoicing replaces PDF invoices with structured data exchanged over the Peppol network in the PINT AE format, through a Ministry of Finance Accredited Service Provider (ASP). Businesses must make their ERP or accounting system produce complete invoice data, clean their master data, connect to an ASP and set up a process for rejected invoices, ahead of their phase deadline.'
topic: Systems integration
published: 2026-11-06
markets: [uae]
relatedServices:
  - business-systems-integration
  - business-process-automation
  - technology-consulting
relatedProjects:
  - veyrafy
---

The UAE is moving business invoicing onto a national e-invoicing system. For most businesses the tax rules are the easy part. The harder part is making sure the systems that create, send and receive invoices can produce structured data, exchange it through the right network and keep everything consistent with the accounts.

This guide looks at UAE e-invoicing from the systems side: what changes, what to check in your ERP or accounting software, and how to plan the work so it is not rushed in the final weeks.

> **Dates and rules change.** The timeline below reflects published guidance at the time of writing. Always confirm the current requirements on the Ministry of Finance and Federal Tax Authority websites, and take tax advice from your tax adviser.

## What UAE e-invoicing is

An e-invoice in this sense is not a PDF sent by email. It is a structured data file, in a defined format, that machines can read without anyone typing it in. The UAE model is built on the **Peppol** network, using a UAE-specific format known as **PINT AE**.

Invoices travel through **Accredited Service Providers (ASPs)**, companies accredited by the Ministry of Finance. In the UAE's decentralised "five-corner" model:

1. the supplier's system creates the invoice data;
2. the supplier's ASP validates it and sends it across the Peppol network;
3. the buyer's ASP receives it;
4. the buyer's system takes it in;
5. invoice data is reported to the tax authority.

Your business does not connect to the network directly. It connects to its ASP. That connection, and the quality of the data your systems hand over, is where most of the work lies.

## The published timeline

Published guidance describes a phased rollout:

| Phase | What happens |
| --- | --- |
| From 1 July 2026 | Pilot and voluntary adoption |
| From 1 January 2027 | Mandatory for businesses with annual revenue of AED 50 million or more |
| From 1 July 2027 | Mandatory for other in-scope businesses |
| Later in 2027 | Government entities |

Businesses must appoint an ASP ahead of their go-live date. Sources have reported different deadlines for that appointment, so check the current date for your revenue band with the Ministry of Finance.

## What has to change in your systems

### 1. Invoice data must be complete and structured

Your system has to produce every mandatory field in the required format: supplier and buyer identifiers, tax registration numbers, line items, quantities, unit prices, tax categories and totals. Many businesses find that some of this data is missing, held in free-text fields, or only added when the PDF is printed.

**Check:** take a sample of real invoices, including credit notes and unusual cases, and list every field the e-invoice requires against where your system holds it today.

### 2. Master data has to be clean

E-invoicing exposes weak master data. Customer and supplier records without tax registration numbers, duplicate customers, inconsistent item codes and outdated addresses will all cause rejected invoices.

**Check:** run a master data review before you connect anything. It is cheaper to fix records once than to fix rejections every day.

### 3. Your ERP or accounting system needs a route to the ASP

There are broadly three ways to connect:

- **A built-in connector** from your ERP or accounting software vendor, if one is offered and supports the UAE format.
- **The ASP's own connector or app** for your system.
- **A custom integration** between your system and the ASP's API, where neither of the above fits your setup or volumes.

The right choice depends on your software, how many entities you run and how much of the process you want automated. Ask each ASP exactly which systems they connect to today, not which ones are planned.

### 4. Incoming invoices change too

E-invoicing is not only about sending. Supplier invoices will arrive as structured data through your ASP. That is an opportunity: invoices that arrive as data can be matched to purchase orders and goods receipts automatically, instead of being keyed in from PDFs.

### 5. Errors need an owner

Invoices will be rejected: a missing field, a wrong tax number, a rounding difference. Decide who sees rejections, how quickly they must be fixed and how the corrected invoice is re-sent. A clear exception process matters as much as the technical connection.

## A practical preparation plan

1. **Confirm your phase and dates.** Revenue band, go-live date and ASP appointment deadline.
2. **Inventory your invoicing.** Every system and entity that creates invoices or credit notes, including any invoices still made in spreadsheets or a separate billing tool.
3. **Gap-check your data.** Mandatory fields against what your systems hold.
4. **Shortlist ASPs.** Compare their connectors for your specific systems, onboarding support and pricing.
5. **Decide the integration route.** Vendor connector, ASP connector or custom integration.
6. **Clean master data.** Customers, suppliers, tax numbers and item codes.
7. **Test with real scenarios.** Normal invoices, credit notes, multi-currency, discounts and corrections.
8. **Agree the exception process.** Owners, response times and how corrections are re-sent.

## Where businesses get caught out

- **Several invoicing systems.** An ERP for trade invoices, a separate tool for services and manual invoices for one-off sales. Every one of them has to be covered.
- **Several entities.** Free zone and mainland companies, branches and group entities may each need their own setup.
- **Late starts.** ASP onboarding, data clean-up and testing take longer than expected. Starting early leaves room for the problems you will find.

## Getting help

UAE e-invoicing is a tax requirement delivered through systems integration. If you want help assessing your systems, choosing an integration route or connecting your ERP or accounting software to your ASP, see [business systems integration](/services/business-systems-integration/) or [how I work with UAE businesses](/uae/).
