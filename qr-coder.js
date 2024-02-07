function generateQRCode() {
            var text = document.getElementById("text").value;
            var qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = ""; // Очистить предыдущий QR-код
            var qrCode = new QRCode(qrcodeContainer, {
                text: text,
                width: 128,
                height: 128,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }
