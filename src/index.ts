document.getElementById('generate-pdf')?.addEventListener('click', async () => {
    const urlInput = document.getElementById('url') as HTMLInputElement;
    const url = urlInput.value;

    if (!url) {
        alert('Por favor, digite uma URL');
        return;
    }

    try {
        const response = await fetch(`/generate-pdf?url=${encodeURIComponent(url)}`);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'download.pdf';
        link.click();
    } catch (error) {
        console.error('Erro ao gerar o PDF:', error);
    }
});
