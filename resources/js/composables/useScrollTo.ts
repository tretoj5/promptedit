const HEADER_HEIGHT = 80

export function useScrollTo() {
    function scrollTo(href: string) {
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT
            window.scrollTo({ top, behavior: 'smooth' })
            history.replaceState(null, '', href)
        }
    }

    return { scrollTo }
}
