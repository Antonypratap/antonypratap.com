---
title: 'Connecting WooCommerce and Xero: What to Plan Before You Switch It On'
metaTitle: 'WooCommerce and Xero Integration: What to Plan First'
description: How to connect a WooCommerce store with Xero properly. Choosing a connector, tax mapping, payments, refunds, stock and the decisions to make before you go live.
topic: Ecommerce integration
published: 2026-11-06
markets: [uae]
relatedServices:
  - ecommerce-integration
  - business-systems-integration
relatedProjects:
  - freshroute-produce
---

Connecting a WooCommerce store to Xero sounds like a five-minute job: install a connector, log in, done. In practice the connector is the easy part. The decisions around it determine whether your accounts stay clean or whether someone spends every month untangling them.

This guide covers what to decide before you switch an integration on.

## What the integration should do

At a minimum, a WooCommerce and Xero integration should:

- create a sales record in Xero for each completed order (an invoice, or a summary of sales);
- record the payment against it, through the right bank or clearing account;
- handle refunds and cancellations;
- map products, shipping and discounts to the right accounts;
- apply the right tax rates.

Optionally, it can also keep customers and stock levels in sync.

## Decision 1: one invoice per order, or a daily summary?

Creating one Xero invoice per order gives full detail, but a busy store can fill Xero with thousands of small invoices. A daily or weekly summary keeps Xero lean, with detail left in WooCommerce. Many businesses choose per-order invoices for trade or business customers and summaries for retail orders. Decide this first, because it changes how everything else is set up.

## Decision 2: which connector?

The options are:

- **The official WooCommerce Xero extension**, which covers standard cases.
- **Third-party connectors**, some with more flexible mapping, scheduling and multi-currency support.
- **A custom integration**, when your rules are specific, volumes are high or several systems must stay in step.

Check each option against your real requirements, especially tax handling. Some connectors only support the tax setup of the country where the business is registered, or do not pass detailed tax data from WooCommerce to Xero.

## Decision 3: tax mapping

Tax is where most integrations go wrong. Agree with your accountant how each case should appear in Xero:

- standard-rated domestic sales;
- zero-rated or exempt sales, such as exports where they apply;
- shipping charges;
- discounts and coupons;
- refunds.

Then test each case with real orders before going live. In the UAE, for example, domestic sales at the standard VAT rate and zero-rated exports need to land on the right tax rates in Xero, or the VAT return will need manual correction.

## Decision 4: payments and the clearing account

Card payments reach your bank as settlements: batches of payments, minus fees, a few days later. If each order is recorded as paid straight into the bank account, the bank feed will never match.

The usual answer is a **clearing account** for each payment gateway. Orders are marked paid into the clearing account, and each settlement is recorded as a transfer from the clearing account to the bank, with gateway fees recorded as an expense. This keeps bank reconciliation simple and makes missing payments visible.

## Decision 5: refunds, cancellations and failed payments

Agree what happens in Xero when an order is cancelled before payment, refunded in full or in part, or paid but then charged back. Each needs a defined path, or Xero will slowly fill with invoices that do not match reality.

## Decision 6: stock

If WooCommerce is your only sales channel, it can hold stock. If you also sell in person, wholesale or on marketplaces, stock usually belongs in Xero (if you use its inventory features) or in a dedicated inventory system, and the website should read from it. Decide the **source of truth** for stock before connecting anything, or two systems will overwrite each other.

## Before you go live

1. Agree the chart of accounts mapping with your accountant.
2. Test every order type: normal, discounted, zero-rated, refunded and cancelled.
3. Reconcile a test settlement through the clearing account.
4. Decide who checks the integration's error log, and how often.
5. Switch on from a clean date, not in the middle of a VAT period.

## Getting help

A WooCommerce and Xero integration is usually one part of a wider picture that also covers payments, stock and ordering. If you want help planning or building it, see [ecommerce and business platform integration](/services/ecommerce-integration/).
