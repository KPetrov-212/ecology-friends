function scrollToTarget(target) {
    var collapseElement = document.querySelector('.navbar-collapse.show');
    if (collapseElement) {
        new bootstrap.Collapse(collapseElement);
    }

    var targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}