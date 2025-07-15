export const pageStyles = {
  container: "min-h-screen bg-background text-foreground",
  hero: {
    wrapper: "relative h-[400px] overflow-hidden",
    background: "absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700",
    overlay: "absolute inset-0 bg-background/60 dark:bg-background/80",
    content: "relative container mx-auto px-4 h-full flex items-center",
    textContainer: "max-w-3xl",
    heading: "text-4xl md:text-6xl font-bold mb-6 text-foreground",
    description: "text-lg md:text-xl mb-8 text-muted-foreground",
    buttonContainer: "flex gap-4"
  },
  section: {
    container: "container mx-auto px-4 py-8 md:py-12",
    card: "rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200",
    heading: "text-2xl md:text-3xl font-bold mb-6 text-foreground"
  },
  buttons: {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  },
  components: {
    player: {
      wrapper: "p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-200",
      header: "flex items-center justify-between mb-6",
      title: "font-semibold text-lg text-foreground",
      duration: "text-sm text-muted-foreground",
      controls: "flex items-center justify-center space-x-4",
      slider: "w-full h-2 bg-secondary/50 rounded-full",
      button: {
        primary: "h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground",
        secondary: "h-12 w-12 rounded-full hover:bg-accent/50"
      }
    },
    card: {
      wrapper: "bg-card text-card-foreground rounded-lg shadow-sm hover:shadow-md transition-all",
      header: "flex justify-between items-start p-6",
      title: "text-lg font-semibold",
      content: "px-6 pb-6 space-y-4",
      description: "text-sm text-muted-foreground",
      tag: "text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full",
      buttonGroup: "flex items-center gap-2"
    },
    filters: {
      button: "bg-background hover:bg-accent text-foreground",
      menu: "bg-popover text-popover-foreground border border-border",
      item: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    }
  }
} 