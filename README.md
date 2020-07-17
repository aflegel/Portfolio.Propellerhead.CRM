# Portfolio.Propellerhead.CRM

A simple customer relationship demo application.

## Description

### Languages and Frameworks

* Dotnet Core 3.1
  * C#
  * Entity Framework
* Angular 10
  * TypeScript
  * CSS

## Setup

### Requirements

* Dotnet 3.1
* NPM

### Installation

#### UI

* run `npm i` to install the required packages

#### API

* run `dotnet restore`

## Information

### Entity Relation Diagram

![alt text](https://raw.githubusercontent.com/aflegel/Portfolio.Propellerhead.CRM/master/Documents/Propellerhead%20CRM%20ERD.png "ERD")

## Features

### Contextual Search

* General search will break up each term into a token and return all records that match all terms.
* You can target a specific field by prefixing a term with a keyword, for example `name:Alex`
  * List of keywords: `name`, `contactName`, `contactEmail`, `notes`, `status`

## Roadmap

| 1.1                               | 1.2                    |  1.3             |
| -------------                     |-------------           | -----            |
| Pagination on homepage            | User Account Controls  | Quotation Tools  |
| Expanded customer records         | - Administrative users | -PDF printing    |
| - Multiple contacts               | - General users        | -Email Delivery  |
| Expanded search terms             |                        |                  |
|  -Created & updated >/< operators |                        |                  |
