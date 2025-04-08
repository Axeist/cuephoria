
interface CalendlyWidget {
  initBadgeWidget(options: {
    url: string;
    text: string;
    color: string;
    textColor: string;
  }): void;
  
  initPopupWidget(options: {
    url: string;
  }): void;

  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, any>;
    utm?: Record<string, any>;
  }): void;
}

interface Window {
  Calendly: CalendlyWidget;
}
