import React, { useEffect, useRef, useState } from 'react';
import './style.css'; // Copy existing styles from style.css

const EventsCarousel = () => {
 
document.addEventListener("DOMContentLoaded", function () {
	// Elements
	const carousel = document.getElementById("memory-carousel");
	const cards = document.querySelectorAll(".memory-card");
	const prevBtn = document.getElementById("prev-btn");
	const nextBtn = document.getElementById("next-btn");

	// Variables
	let currentIndex = 0;
	let startX, startY;
	let isDragging = false;
	let theta = 0;
	let radius = window.innerWidth <= 768 ? 250 : 400;
	const totalCards = cards.length;

	// Initialize
	function init() {
		// Position cards in a circle
		arrangeCards();

		// Add event listeners
		prevBtn.addEventListener("click", prevCard);
		nextBtn.addEventListener("click", nextCard);
		cards.forEach((card) => {
			card.addEventListener("click", flipCard);
		});

		// Touch/mouse events for dragging
		carousel.addEventListener("mousedown", dragStart);
		carousel.addEventListener("touchstart", dragStart, { passive: true });
		document.addEventListener("mousemove", drag);
		document.addEventListener("touchmove", drag, { passive: false });
		document.addEventListener("mouseup", dragEnd);
		document.addEventListener("touchend", dragEnd);

		// Keyboard navigation
		document.addEventListener("keydown", handleKeyDown);

		// Start ambient sound
		playAmbientSound();
	}

	// Arrange cards in a circle
	function arrangeCards() {
		const angle = 360 / totalCards;
		cards.forEach((card, index) => {
			// Calculate the angle for this card
			const cardAngle = angle * index;
			// Convert to radians
			const rad = (cardAngle * Math.PI) / 180;
			// Calculate position
			const x = radius * Math.sin(rad);
			const z = radius * Math.cos(rad) * -1;

			// Apply transform
			card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;

			// Store the card's index
			card.dataset.index = index;
		});
	}

	// Rotate carousel
	function rotateCarousel() {
		carousel.style.transform = `rotateY(${theta}deg)`;

		// Update current card index
		currentIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
		if (currentIndex >= totalCards) currentIndex = 0;
	}

	// Next card
	function nextCard() {
		theta -= 360 / totalCards; // Changed direction to match swipe
		rotateCarousel();
	}

	// Previous card
	function prevCard() {
		theta += 360 / totalCards; // Changed direction to match swipe
		rotateCarousel();
	}

	// Flip card
	function flipCard(e) {
		const card = e.currentTarget;
		const cardIndex = parseInt(card.dataset.index);

		// Only flip the current front-facing card
		if (cardIndex === currentIndex) {
			card.classList.toggle("flipped");
		}
	}

	// Drag functions
	function dragStart(e) {
		e.preventDefault(); // Prevent default behavior
		isDragging = true;
		startX = e.pageX || e.touches[0].pageX;
	}

	function drag(e) {
		if (!isDragging) return;
		e.preventDefault(); // Prevent default scrolling

		const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
		const diffX = currentX - startX;

		// Rotate based on drag distance - FIXED DIRECTION
		const sensitivity = 0.5;
		const newTheta = theta + diffX * sensitivity;

		carousel.style.transform = `rotateY(${newTheta}deg)`;
	}

	function dragEnd(e) {
		if (!isDragging) return;
		isDragging = false;

		const currentX =
			e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
		const diffX = currentX - startX;

		// FIXED DIRECTION: If swiping right, show previous card (theta increases)
		// If swiping left, show next card (theta decreases)
		if (Math.abs(diffX) > 20) {
			if (diffX > 0) {
				prevCard(); // Swipe right to see previous card
			} else {
				nextCard(); // Swipe left to see next card
			}
		} else {
			// Snap to the closest card
			const anglePerCard = 360 / totalCards;
			const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
			theta = snapAngle;
			rotateCarousel();
		}
	}

	// Keyboard navigation
	function handleKeyDown(e) {
		if (e.key === "ArrowLeft") {
			nextCard(); // Changed to match swipe direction
		} else if (e.key === "ArrowRight") {
			prevCard(); // Changed to match swipe direction
		} else if (e.key === "Enter" || e.key === " ") {
			const currentCard = document.querySelector(
				`.memory-card[data-index="${currentIndex}"]`
			);
			if (currentCard) {
				currentCard.classList.toggle("flipped");
			}
		}
	}

	// Play ambient sound
	function playAmbientSound() {
		// Optional: Add ambient sound if needed
	}

	// Resize handler
	window.addEventListener("resize", () => {
		radius = window.innerWidth <= 768 ? 250 : 400;
		arrangeCards();
		rotateCarousel();
	});

	// Initialize the carousel
	init();
});

  return (
   
<>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Chakra+Petch:wght@300;400;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="style.css" />
    <script src="./main.js"></script>
    

<body>
    <div className="cosmos-background">
        <div className="stars-container"></div>
    </div>
    
    <div className="container-fluid h-100 d-flex flex-column">
        <header className="py-3 text-center">
            <h1 className="title">Interdimensional Memory Shards</h1>
        </header>
    
        <main className="flex-grow-1 d-flex align-items-center justify-content-center position-relative">
            <div className="carousel-container">
                <div className="carousel" id="memory-carousel">
                    
                    <div className="memory-card" data-memory-id="1">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <div className="memory-date">DIMENSION: A-137</div>
                                    <h3>First Contact</h3>
                                    <div className="memory-image">
                                        <i className="fa-solid fa-rocket fa-3x"></i>
                                        <div className="glitch-effect"></div>
                                    </div>
                                    <p className="memory-preview">I saw the portal open before me, pulsing with energy...</p>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-content">
                                    <h3>First Contact</h3>
                                    <p>I saw the portal open before me, pulsing with energy unknown to my dimension. The coordinates were clear: A-137. As I stepped through, my molecules scattered across realities. This was the first jump. I wasn't supposed to remember it, but somehow I do.</p>
                                    <div className="memory-coordinates">
                                        <span><i className="fa-solid fa-location-dot"></i> 37.7749° N, 122.4194° W</span>
                                        <span className="time-stamp"><i className="fa-regular fa-clock"></i> 03:27:16</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                   
                    <div className="memory-card" data-memory-id="2">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <div className="memory-date">DIMENSION: C-982</div>
                                    <h3>The Watchers</h3>
                                    <div className="memory-image">
                                        <i className="fa-solid fa-eye fa-3x"></i>
                                        <div className="glitch-effect"></div>
                                    </div>
                                    <p className="memory-preview">They observed from the shadows, eyes glowing...</p>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-content">
                                    <h3>The Watchers</h3>
                                    <p>They observed from the shadows, eyes glowing with ancient knowledge. The Watchers have been tracking my jumps. They say I'm destabilizing the multiverse with each crossing. My presence causes ripples they can't control. I'm becoming a threat.</p>
                                    <div className="memory-coordinates">
                                        <span><i className="fa-solid fa-location-dot"></i> 51.5074° N, 0.1278° W</span>
                                        <span className="time-stamp"><i className="fa-regular fa-clock"></i> 17:42:03</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    
                    <div className="memory-card" data-memory-id="3">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <div className="memory-date">DIMENSION: F-451</div>
                                    <h3>The Library</h3>
                                    <div className="memory-image">
                                        <i className="fa-solid fa-book fa-3x"></i>
                                        <div className="glitch-effect"></div>
                                    </div>
                                    <p className="memory-preview">Endless shelves containing every possible reality...</p>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-content">
                                    <h3>The Library</h3>
                                    <p>Endless shelves containing every possible reality. I found my own book there—pages still being written as I moved. The Librarian told me I was never supposed to leave my original dimension. My story was already complete. Now I'm writing outside the margins.</p>
                                    <div className="memory-coordinates">
                                        <span><i className="fa-solid fa-location-dot"></i> 40.7128° N, 74.0060° W</span>
                                        <span className="time-stamp"><i className="fa-regular fa-clock"></i> 09:13:27</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                   
                    <div className="memory-card" data-memory-id="4">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <div className="memory-date">DIMENSION: X-000</div>
                                    <h3>The Void</h3>
                                    <div className="memory-image">
                                        <i className="fa-solid fa-atom fa-3x"></i>
                                        <div className="glitch-effect"></div>
                                    </div>
                                    <p className="memory-preview">Nothing exists here, yet I feel everything...</p>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-content">
                                    <h3>The Void</h3>
                                    <p>Nothing exists here, yet I feel everything. The Void is the space between dimensions, a quantum foam of possibilities. I stayed too long and began to dissolve. Parts of me are still there, echoing. I'm not whole anymore. Can you feel the gaps in my memories?</p>
                                    <div className="memory-coordinates">
                                        <span><i className="fa-solid fa-location-dot"></i> 0.0000° N, 0.0000° E</span>
                                        <span className="time-stamp"><i className="fa-regular fa-clock"></i> --:--:--</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="memory-card" data-memory-id="5">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <div className="memory-date">DIMENSION: H-221</div>
                                    <h3>The Mirror</h3>
                                    <div className="memory-image">
                                        <i className="fa-solid fa-clone fa-3x"></i>
                                        <div className="glitch-effect"></div>
                                    </div>
                                    <p className="memory-preview">I saw myself, but not as I am now...</p>
                                    <div className="card-glow"></div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-content">
                                    <h3>The Mirror</h3>
                                    <p>I saw myself, but not as I am now. The mirror showed all my possible selves across dimensions. Some were happy, some were monsters. All were me. The reflection spoke: "You're fracturing reality by existing in multiple places. You need to choose one timeline and stay."</p>
                                    <div className="memory-coordinates">
                                        <span><i className="fa-solid fa-location-dot"></i> 35.6762° N, 139.6503° E</span>
                                        <span className="time-stamp"><i className="fa-regular fa-clock"></i> 22:07:59</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    
                </div>
            </div>
    
            <div className="carousel-controls">
                <button id="prev-btn" className="control-btn">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button id="next-btn" className="control-btn">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </main>
    
        <footer className="py-3 text-center">
            <p className="instructions">Click cards to reveal memories • Use arrow keys to navigate</p>
        </footer>
    </div>
</body>
<style>
    {`
   


.title {
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
	background: linear-gradient(90deg, var(--primary), var(--secondary));
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	text-shadow: 0 0 15px rgba(157, 0, 255, 0.5);
	animation: pulse 3s infinite alternate;
}

/* Cosmic Background */
.cosmos-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;
}

.stars-container {
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(1px 1px at 25% 25%, white, rgba(0, 0, 0, 0)),
		radial-gradient(1px 1px at 50% 50%, white, rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 75% 75%, white, rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 100% 100%, white, rgba(0, 0, 0, 0));
	background-size: 200px 200px, 300px 300px, 400px 400px, 600px 600px;
	background-repeat: repeat;
	animation: twinkle 10s linear infinite;
}

@keyframes twinkle {
	0% {
		background-position: 0 0, 0 0, 0 0, 0 0;
	}
	100% {
		background-position: 200px 200px, 300px 300px, 400px 400px, 600px 600px;
	}
}

/* Carousel Container */
.carousel-container {
	position: relative;
	width: 100%;
	height: 500px;
	perspective: 1000px;
	transform-style: preserve-3d;
	display: flex;
	justify-content: center;
	align-items: center;
	touch-action: none; /* Prevent default touch actions */
}

.carousel {
	position: relative;
	width: var(--carousel-radius);
	height: var(--carousel-radius);
	transform-style: preserve-3d;
	transition: transform 0.5s ease;
}

/* Memory Cards */
.memory-card {
	position: absolute;
	width: var(--card-width);
	height: var(--card-height);
	left: 50%;
	top: 50%;
	margin-left: calc(var(--card-width) / -2);
	margin-top: calc(var(--card-height) / -2);
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	cursor: pointer;
}

.card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.memory-card:hover .card-inner {
	transform: translateZ(20px);
}

.memory-card.flipped .card-inner {
	transform: rotateY(180deg);
}

.card-front,
.card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.card-front {
	background: linear-gradient(
		135deg,
		rgba(30, 30, 60, 0.8),
		rgba(20, 20, 40, 0.9)
	);
	border: 1px solid rgba(157, 0, 255, 0.3);
	transform-style: preserve-3d;
}

.card-back {
	background: linear-gradient(
		135deg,
		rgba(20, 20, 40, 0.9),
		rgba(30, 30, 60, 0.8)
	);
	border: 1px solid rgba(0, 229, 255, 0.3);
	transform: rotateY(180deg);
}

.card-content {
	padding: 20px;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
}

.memory-date {
	font-family: "Orbitron", sans-serif;
	font-size: 0.8rem;
	color: var(--accent);
	margin-bottom: 10px;
	text-shadow: 0 0 5px rgba(255, 0, 229, 0.7);
}

.memory-card h3 {
	font-size: 1.5rem;
	margin-bottom: 15px;
	color: var(--text-primary);
	text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.memory-image {
	width: 100%;
	height: 150px;
	margin-bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	border-radius: 8px;
	background: rgba(0, 0, 0, 0.3);
}

.memory-image i {
	color: var(--primary);
	font-size: 4rem;
	text-shadow: var(--glow-primary);
	animation: pulse 3s infinite alternate;
	z-index: 2;
}

.glitch-effect {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		45deg,
		transparent 65%,
		rgba(157, 0, 255, 0.3) 70%,
		transparent 75%
	);
	background-size: 200% 200%;
	animation: glitch 3s linear infinite;
	z-index: 1;
}

@keyframes glitch {
	0% {
		background-position: 0 0;
	}
	25% {
		background-position: 100% 0;
	}
	50% {
		background-position: 100% 100%;
	}
	75% {
		background-position: 0 100%;
	}
	100% {
		background-position: 0 0;
	}
}

.memory-preview {
	font-size: 0.9rem;
	color: var(--text-secondary);
	margin-bottom: 15px;
	flex-grow: 1;
}

.card-back .card-content p {
	font-size: 0.9rem;
	color: var(--text-secondary);
	margin-bottom: 20px;
	line-height: 1.5;
	flex-grow: 1;
}

.memory-coordinates {
	font-family: "Orbitron", sans-serif;
	font-size: 0.8rem;
	color: var(--secondary);
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.time-stamp {
	color: var(--accent);
}

.card-glow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 15px;
	pointer-events: none;
	background: radial-gradient(
		circle at 50% 50%,
		rgba(157, 0, 255, 0.1),
		transparent 70%
	);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.memory-card:hover .card-glow {
	opacity: 1;
}

/* Carousel Controls */
.carousel-controls {
	position: absolute;
	bottom: -50px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	gap: 20px;
	z-index: 10;
}

.control-btn {
	background: rgba(20, 20, 40, 0.7);
	border: 1px solid var(--primary);
	color: var(--text-primary);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: var(--glow-primary);
}

.control-btn:hover {
	background: rgba(30, 30, 60, 0.9);
	transform: scale(1.1);
}

/* Footer */
footer {
	position: relative;
	z-index: 10;
}

.instructions {
	font-size: 0.8rem;
	color: var(--text-secondary);
	opacity: 0.7;
}

/* Animations */
@keyframes pulse {
	0%,
	100% {
		opacity: 0.8;
	}
	50% {
		opacity: 1;
	}
}

/* Responsive Adjustments */
@media (max-width: 768px) {
	:root {
		--card-width: 250px;
		--card-height: 350px;
		--carousel-radius: 300px;
	}

	.title {
		font-size: 1.8rem;
	}

	.carousel-container {
		height: 400px;
	}

	.memory-card h3 {
		font-size: 1.2rem;
	}

	.memory-image {
		height: 120px;
	}
}

@media (max-width: 576px) {
	:root {
		--card-width: 220px;
		--card-height: 320px;
		--carousel-radius: 250px;
	}

	.title {
		font-size: 1.5rem;
	}

	.carousel-container {
		height: 350px;
	}
}
`}
    </style>
</>
  );
};

export default EventsCarousel;