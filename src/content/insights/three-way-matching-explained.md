---
title: 'Three-Way Matching Explained: Purchase Orders, Goods Receipts and Invoices'
metaTitle: 'Three-Way Matching Explained: PO, Goods Receipt and Invoice'
description: What three-way matching is, why finance teams use it, how to handle mismatches and tolerances, and how to automate it without losing control of payments.
answer: 'Three-way matching checks a supplier invoice against the purchase order and the goods receipt before payment: the supplier, items, quantities, prices, tax and totals must agree, and the invoice must not be a duplicate. It prevents paying for goods not ordered or not received. Automation can match invoices that agree and hold every mismatch for a person to decide.'
topic: Process automation
published: 2026-11-06
relatedServices:
  - business-process-automation
  - ai-automation
  - business-systems-integration
relatedProjects:
  - veyrafy
---

Three-way matching is the check finance teams carry out before paying a supplier: does the invoice agree with what was ordered and what was actually received? It is one of the most effective controls against paying for the wrong thing. Done by hand, it is also one of the most repetitive jobs in accounts payable.

## The three documents

1. **The purchase order (PO):** what you agreed to buy, in what quantity and at what price.
2. **The goods receipt (GRN):** what actually arrived, recorded by the person who received it.
3. **The supplier invoice:** what the supplier is asking you to pay.

The invoice should be paid only when all three agree.

## Two-way and three-way matching

**Two-way matching** compares the invoice with the purchase order: are the items, quantities and prices what was agreed? It suits services and items where there is no physical delivery to record.

**Three-way matching** adds the goods receipt: was the invoiced quantity actually received? It protects against paying for goods that never arrived, arrived short or were returned.

## What gets compared

- **Supplier:** the invoice comes from the supplier on the order.
- **Items:** each invoice line corresponds to an order line.
- **Quantity:** invoiced quantity does not exceed the quantity received, less anything already invoiced.
- **Price:** the unit price agrees with the order.
- **Tax and totals:** tax is calculated correctly and totals add up.
- **Duplicates:** the invoice has not already been recorded or paid.

## Common mismatches and what they mean

| Mismatch | Usual cause | Typical resolution |
| --- | --- | --- |
| Invoice quantity higher than received | Short delivery, or receipt not yet recorded | Check whether goods arrived, record the receipt or ask for a credit note |
| Price different from the order | Price change, or a supplier error | Confirm the agreed price, update the order or dispute the invoice |
| No goods receipt at all | Delivery not recorded | Ask the receiving team to confirm |
| Invoice already recorded | Duplicate submission | Reject the duplicate |
| Item not on the order | Substitution or error | Check with purchasing |

## Tolerances: use them carefully

Many businesses allow small differences, such as a few units of currency on rounding. Tolerances keep minor noise from stopping payments, but they are also how small overpayments slip through at scale. Set them deliberately, keep them small and review them regularly. Some businesses choose no tolerance at all, so that every difference is seen and decided by a person.

## Automating three-way matching

Automation can remove most of the manual effort:

1. **Capture** the invoice data, from structured e-invoices or by reading PDFs and images.
2. **Find** the supplier, order and receipt in your business records.
3. **Compare** every line using clear rules.
4. **Pass** invoices that match to the payment process.
5. **Stop** everything else and show a person exactly what does not match, with the evidence.

The key is the last step. Automation should never "resolve" a mismatch by guessing. It should make the mismatch obvious and the decision quick.

[Veyrafy](/projects/veyrafy/), my invoice verification product, is built on this principle: invoices that match are marked ready, and anything that does not is held with a clear explanation for the person responsible.

## Getting started

If your team matches invoices by hand, start by measuring how many invoices you process, how many have mismatches and what the common causes are. That tells you how much automation would save, and where to start. For help, see [business process automation](/services/business-process-automation/).
