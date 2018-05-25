# Portfolio.Propellerhead.CRM
A simple customer relationship demo application. 

## Description
### Languages and Frameworks
* .NET Core 2.0
  * ASP.NET Core 2.0
  * C#
  * Entity Framework
* Angular6
  * TypeScript
  * CSS

## Setup
### Requirements
* Visual Studio 2017
  * Package Installer Extension is **highly** recommended
* SQL Server or PostgreSQL
* .NET Core 2.0+
* NPM
### Visual Studio
* On first build VS will install all NuGet and NPM packages
  * NPM packages can be manually installed
### Database
* The default is configured for SQL Server
  * Configure your server and credentials in the `Propellerhead.CRM/appsettings.json` file
* PostgreSQL drivers are included
  * Changing the database type can be done in the `Propellerhead.CRM/Startup.cs` file in the `ConfigureServices` function
    * PostgreSQL uses `UseNpgsql(ConnectionString)`

## Deployment
### Microsoft Stack
* Configure WebDeploy for your server
### Linux-arm (Raspberry Pi)
* FTP is required
* Must be published into a self-contained folder
#### Useful Guides
* [PostgreSQL installation](https://opensource.com/article/17/10/set-postgres-database-your-raspberry-pi)
* [.NET Core installation](https://blogs.msdn.microsoft.com/david/2017/07/20/setting_up_raspian_and_dotnet_core_2_0_on_a_raspberry_pi/)
* [Nginx installation and configuration](https://docs.microsoft.com/en-ca/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.0&tabs=aspnetcore2x)

# Roadmap
| 1.1                               | 1.2                    |  1.3             |
| -------------                     |-------------           | -----            |
| Pagination on homepage            | User Account Controls  | Quotation Tools  |
| Expanded customer records         | - Administrative users | -PDF printing    |
| - Multiple contacts               | - General users        | -Email Delivery  |
| Expanded search terms             |                        |                  |
|  -Created & updated >/< operators |                        |                  |


# Information
## Entity Relation Diagram
![alt text](https://raw.githubusercontent.com/aflegel/Portfolio.Propellerhead.CRM/master/Documents/Propellerhead%20CRM%20ERD.png "ERD")

# Features
## Contextual Search
* General search will break up each term into a token and return all records that match all terms.
* You can target a specific field by prefixing a term with a keyword, for example `name:Alex`
  * List of keywords: `name`, `contactName`, `contactEmail`, `notes`, `status`