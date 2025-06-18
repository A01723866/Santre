// Testimonials Gallery functionality
export class TestimonialsGallery {
  private currentIndex = 0;
  private isTransitioning = false;
  private autoplayInterval: ReturnType<typeof setInterval> | undefined;
  private isDragging = false;
  private startX = 0;
  private currentX = 0;
  private initialTransform = 0;
  private velocity = 0;
  private lastX = 0;
  private lastTime = 0;
  private dragThreshold = 50;
  
  // DOM elements
  private cards: NodeListOf<Element>;
  private dots: NodeListOf<Element>;
  private prevBtn: HTMLElement | null;
  private nextBtn: HTMLElement | null;
  private container: HTMLElement | null;
  private gallery: HTMLElement | null;

  // Gallery settings
  private cardWidth = 320;
  private gap = 32; // 2rem = 32px
  private itemWidth = this.cardWidth + this.gap;

  constructor() {
    this.cards = document.querySelectorAll('.testimonial-card');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.getElementById('prev-testimonial');
    this.nextBtn = document.getElementById('next-testimonial');
    this.container = document.getElementById('testimonials-container');
    this.gallery = document.querySelector('.testimonials-gallery') as HTMLElement;
    
    this.calculateDimensions();
  }

  private calculateDimensions(): void {
    if (!this.cards.length || !this.gallery) return;
    
    const firstCard = this.cards[0] as HTMLElement;
    const style = window.getComputedStyle(firstCard);
    this.cardWidth = parseInt(style.width);
    
    const galleryStyle = window.getComputedStyle(this.gallery);
    this.gap = parseInt(galleryStyle.gap);
    this.itemWidth = this.cardWidth + this.gap;
  }

  // Update active testimonial and center it
  private updateTestimonials(smooth = true): void {
    if (!this.gallery) return;
    
    if (smooth) {
      this.isTransitioning = true;
    }
    
    // Update cards
    this.cards.forEach((card, index) => {
      card.classList.toggle('active', index === this.currentIndex);
    });
    
    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });

    // Calculate scroll position to center the active card
    const containerWidth = this.container!.clientWidth;
    const activeCardOffset = this.currentIndex * this.itemWidth;
    const centerOffset = (containerWidth - this.cardWidth) / 2;
    const scrollPosition = Math.max(0, activeCardOffset - centerOffset);
    
    // Apply transform to gallery
    if (smooth) {
      this.gallery.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      this.gallery.style.transition = 'none';
    }
    
    this.gallery.style.transform = `translateX(-${scrollPosition}px)`;
    
    // Update navigation buttons
    this.updateNavigationButtons();
    
    if (smooth) {
      setTimeout(() => {
        this.isTransitioning = false;
      }, 600);
    }
  }

  private updateNavigationButtons(): void {
    if (this.prevBtn && this.nextBtn) {
      const isAtStart = this.currentIndex === 0;
      const isAtEnd = this.currentIndex === this.cards.length - 1;
      
      (this.prevBtn as HTMLButtonElement).disabled = isAtStart;
      (this.nextBtn as HTMLButtonElement).disabled = isAtEnd;
      
      this.prevBtn.style.opacity = isAtStart ? '0.4' : '1';
      this.nextBtn.style.opacity = isAtEnd ? '0.4' : '1';
    }
  }

  // Navigation functions
  private nextTestimonial(): void {
    if (this.currentIndex < this.cards.length - 1 && !this.isTransitioning) {
      this.currentIndex++;
      this.updateTestimonials();
    }
  }
  
  private prevTestimonial(): void {
    if (this.currentIndex > 0 && !this.isTransitioning) {
      this.currentIndex--;
      this.updateTestimonials();
    }
  }

  private goToTestimonial(index: number): void {
    if (index !== this.currentIndex && !this.isTransitioning && index >= 0 && index < this.cards.length) {
      this.currentIndex = index;
      this.updateTestimonials();
    }
  }

  // Auto-play functionality
  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      if (this.currentIndex >= this.cards.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.updateTestimonials();
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  // Drag/scroll functionality
  private onDragStart(e: MouseEvent | TouchEvent): void {
    if (this.isTransitioning) return;
    
    this.isDragging = true;
    this.stopAutoplay();
    
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    this.startX = clientX;
    this.currentX = clientX;
    this.lastX = clientX;
    this.lastTime = Date.now();
    this.initialTransform = this.getCurrentScrollPosition();
    
    if (this.container) {
      this.container.style.cursor = 'grabbing';
    }
    
    if (this.gallery) {
      this.gallery.style.transition = 'none';
    }
    
    e.preventDefault();
  }

  private onDragMove(e: MouseEvent | TouchEvent): void {
    if (!this.isDragging || !this.gallery) return;
    
    e.preventDefault();
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    this.currentX = clientX;
    const deltaX = this.currentX - this.startX;
    const now = Date.now();
    
    // Calculate velocity for momentum
    this.velocity = (clientX - this.lastX) / Math.max(now - this.lastTime, 1);
    this.lastX = clientX;
    this.lastTime = now;
    
    // Apply drag transform
    const newScrollPosition = Math.max(0, this.initialTransform - deltaX);
    this.gallery.style.transform = `translateX(-${newScrollPosition}px)`;
  }

  private onDragEnd(): void {
    if (!this.isDragging || !this.gallery) return;
    
    this.isDragging = false;
    
    if (this.container) {
      this.container.style.cursor = 'grab';
    }
    
    const deltaX = this.currentX - this.startX;
    const absVelocity = Math.abs(this.velocity);
    
    // Determine direction and threshold
    let shouldChangeCard = false;
    let newIndex = this.currentIndex;
    
    if (Math.abs(deltaX) > this.dragThreshold || absVelocity > 0.5) {
      if (deltaX > 0 && this.currentIndex > 0) {
        // Dragged right (previous)
        newIndex = this.currentIndex - 1;
        shouldChangeCard = true;
      } else if (deltaX < 0 && this.currentIndex < this.cards.length - 1) {
        // Dragged left (next)
        newIndex = this.currentIndex + 1;
        shouldChangeCard = true;
      }
    }
    
    if (shouldChangeCard) {
      this.currentIndex = newIndex;
    }
    
    // Always update to snap to correct position
    this.updateTestimonials();
    this.restartAutoplay();
  }

  private getCurrentScrollPosition(): number {
    if (!this.gallery) return 0;
    const transform = this.gallery.style.transform;
    const match = transform.match(/translateX\(-?([0-9.]+)px\)/);
    return match ? parseFloat(match[1]) : 0;
  }

  // Wheel scroll functionality
  private onWheel(e: WheelEvent): void {
    if (this.isTransitioning) return;
    
    e.preventDefault();
    this.stopAutoplay();
    
    const delta = e.deltaY || e.deltaX;
    
    if (delta > 10) {
      this.nextTestimonial();
    } else if (delta < -10) {
      this.prevTestimonial();
    }
    
    this.restartAutoplay();
  }

  // Event handlers
  private setupEventListeners(): void {
    // Navigation buttons
    this.prevBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.restartAutoplay();
      this.prevTestimonial();
    });
    
    this.nextBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.restartAutoplay();
      this.nextTestimonial();
    });
    
    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.restartAutoplay();
        this.goToTestimonial(index);
      });
    });

    // Card click navigation
    this.cards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        if (!this.isDragging && Math.abs(this.currentX - this.startX) < 5) {
          e.preventDefault();
          this.restartAutoplay();
          this.goToTestimonial(index);
        }
      });
    });
    
    // Drag/touch events
    this.setupDragEvents();
    
    // Wheel events
    this.container?.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
    
    // Intersection Observer for performance
    this.setupIntersectionObserver();
    
    // Resize observer
    this.setupResizeObserver();
  }

  private setupDragEvents(): void {
    if (!this.container) return;
    
    // Mouse events
    this.container.addEventListener('mousedown', this.onDragStart.bind(this));
    document.addEventListener('mousemove', this.onDragMove.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
    
    // Touch events
    this.container.addEventListener('touchstart', this.onDragStart.bind(this), { passive: false });
    document.addEventListener('touchmove', this.onDragMove.bind(this), { passive: false });
    document.addEventListener('touchend', this.onDragEnd.bind(this));
    
    // Prevent context menu on drag
    this.container.addEventListener('contextmenu', (e) => {
      if (this.isDragging) {
        e.preventDefault();
      }
    });
    
    // Prevent default drag behavior on images
    this.cards.forEach(card => {
      const img = card.querySelector('img');
      if (img) {
        img.addEventListener('dragstart', (e) => e.preventDefault());
      }
    });
  }

  private setupIntersectionObserver(): void {
    if (!this.container) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      });
    });
    
    observer.observe(this.container);
  }

  private setupResizeObserver(): void {
    const resizeObserver = new ResizeObserver(() => {
      this.calculateDimensions();
      this.updateTestimonials(false);
    });
    
    if (this.container) {
      resizeObserver.observe(this.container);
    }
  }

  // Public initialization method
  public init(): void {
    this.setupEventListeners();
    this.updateTestimonials(false);
  }

  // Cleanup method
  public destroy(): void {
    this.stopAutoplay();
  }
}

// Initialize testimonials gallery when DOM is ready
function initTestimonialsGallery(): void {
  const gallery = new TestimonialsGallery();
  gallery.init();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestimonialsGallery);
} else {
  initTestimonialsGallery();
} 