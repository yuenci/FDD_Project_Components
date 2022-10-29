# FDD_Project_Components

<!-- ABOUT THE PROJECT -->

## About The Project

![pageView](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/ImageViewer.gif)

The purpose of this project is to provide some cool  and out of the box web components  for my friends(KK & Lennon)' web development assignment. 😜

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Use `git clone` to download this project, and add any component you need to your own project.
This projects include

### Frame part

#### 1. [Rating](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/1.%20Rating%20component)

Used for voting, and the all data after voting is stored in local storage.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/rating.gif)

</details>

#### 2. [Theme Switching](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/2.%20Set%20theme)

Use for switching the page theme with one or more toggle buttons.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/themeSwitching.gif)

</details>

#### 4. [Ramdom Place Image](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/4.%20Random%20cards)

Used for picture selection. As for the position of the selected picture, the picture previously placed in the middle is randomly selected to be placed in a position.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/randomPlace.gif)

</details>

#### 5. [Hover music](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/5.%20hover%20music)

Used to play music when the mouse hovers.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/HoverMusic.gif)

</details>

#### 6. [Page viewer](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/6.%20ViewPager)

Used to loop through images.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/ImageViewer.gif)

</details>

#### 7. [Responsive footer](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/7.footer)

A complex responsive footer.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/ResponsiveFood.gif)

</details>

#### 9. [Iframe switching](https://github.com/yuenci/FDD_Project_Components/tree/main/Frame/9.iframe)

Used to toggle the iframe in the page.

<details><summary>Show demo</summary>

![image](https://github.com/yuenci/FDD_Project_Components/blob/main/demoImage/frameSwitching.gif)

</details>

### Others

1. Hide or show dom elememts in page: [01.page%20switch.html](https://github.com/yuenci/FDD_Project_Components/blob/main/01.page%20switch.html)
2. Insert dom elements with loop [02.insertDomWithLoop.html](https://github.com/yuenci/FDD_Project_Components/blob/main/02.insertDomWithLoop.html)
3. Import dynamic insert script [4.1template.html](https://github.com/yuenci/FDD_Project_Components/blob/main/4.1template.html)
4. Store data(number, string, json) to local storage [5.store.html](https://github.com/yuenci/FDD_Project_Components/blob/main/5.store.html)
5. Set html background wiht JS [6.dark.html](https://github.com/yuenci/FDD_Project_Components/blob/main/6.dark.html)
6. Embed google form in page [9.google form.html](https://github.com/yuenci/FDD_Project_Components/blob/main/9.google%20form.html)


<!-- USAGE EXAMPLES -->

## Usage

1. Import JS first first

```javascript
<script src="./view pager.js"></script>
<script src="./move.min.js"></script>
```

2. Place the div container to you want

```Html
    <div id="viewPager-card-container">
        <div id="viewPager-left"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="viewPager-card" id="viewPager-card1" position="1"><img src="./image/1.png" alt=""></div>
        <div class="viewPager-card" id="viewPager-card2" position="2"><img src="./image/2.png" alt=""></div>
        <div class="viewPager-card" id="viewPager-card3" position="3"><img src="./image/3.png" alt=""></div>
        <div class="viewPager-card" id="viewPager-card4" position="4"><img src="./image/4.png" alt=""></div>
        <div class="viewPager-card" id="viewPager-card5" position="5"><img src="./image/5.png" alt=""></div>
        <div id="viewPager-right"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Demo

- [X] Single page switching
- [X] looply insert Dom
- [X] search
- [X] template
- [X] Data store
- [X] Night mode
- [ ] Timer
- [ ] Stacked display at random locations
- [X] form
- [X] Play music in suspension.

Frame

- [X] Grader
- [X] Global theme switch component
- [ ] search
- [X] Random stacking
- [X] Play music in suspension

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
