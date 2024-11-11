document.addEventListener("DOMContentLoaded", function() {
    // Check if a header element should be added
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        fetch("/htmlheader.html")
            .then(response => {
                if (!response.ok) throw new Error("Failed to load header.");
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading header:", error);
            });
    }
});