# Extreme Travel Website!
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Apply the DOM traversing techniques you've learned, to complete the following tasks.

## Tasks

- The [HTML](./index.html) and [CSS](./main.css) have already been prepared for you. Do not edit these files.
- Complete the tasks below by writing your JavaScript code in the [script.js](./script.js) file

### Task 1

Using JavaScript;

- Select the `<header>` that is the **closest** parent of the `<h1>` heading
- Give the `<header>` a `grey` solid border of `5px`

### Task 2

Write some JavaScript so that if the element with the class `.info` contains an element with the class `.info-package`;

- Select all elements with the class `.package-title`
- Give the previous sibling element a border with the following value `2px solid #072F5F`

### Task 3

Write some JavaScript so that for the element with the class `.info`;

- Select all `<label>` elements inside the element with the class `.info`
- For each `<label>` element, check the classname;
  - if it matches `mild`, give the element a `yellow` solid border
  - if it matches `intense`, give the element an `orange` solid border
  - if it maches neither, give it a `red` solid border

### Task 4

Using JavaScript;

- Copy the children of `ul.nav-list` element to the `ul.site-map` element

## Example

Here is how the finished page should look.

![Reference Image](./reference.png)

## Bonus Task

Change the design of the landing page - have fun with it!

---

Images used under the [Pixabay license](https://pixabay.com/service/license-summary/)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Header

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | closest parent `header` to `h1` has border style `5px solid rgb` |

### Info Section

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | previous sibling of `.package-title` has a border |

### Labels

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `.mild` and `.intense` labels have `yellow` or `orange` border |

### Footer Navigation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Footer `.site-map` contains copy of children of `.nav-list`. |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=spa-dom-extreme-travel)


[//]: # (autograding info end)