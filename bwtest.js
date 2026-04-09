async function generateBandwidthTest() {
    const subnet = document.getElementById("subnet_ip").value.trim();
    const speed = document.getElementById("bandwidth_layanan").value.trim();
    const output = document.getElementById("outBandwidthTest");

    // reset output
    output.innerHTML = "Processing...";

    // validasi sederhana (jangan biarkan user asal isi)
    if (!subnet) {
        output.innerHTML = "❌ Subnet tidak boleh kosong";
        return;
    }

    if (!speed) {
        output.innerHTML = "❌ Bandwidth tidak boleh kosong";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/bw-test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subnet: subnet,
                speed: speed
            })
        });

        const data = await response.json();

        // handling response
        if (data.status === "success") {
            output.innerHTML = `
✅ <b>SUCCESS</b><br><br>
<b>IP POP:</b> ${data.ip_pop}<br>
<b>IP CUSTOMER:</b> ${data.customer_ip}<br><br>

🔵 <b>TRANSMIT</b><br>
Avg: ${data.transmit.avg}<br>
Current: ${data.transmit.current}<br>
CPU Local: ${data.transmit.local_cpu}<br>
CPU Remote: ${data.transmit.remote_cpu}<br><br>

🔴 <b>RECEIVE</b><br>
Avg: ${data.receive.avg}<br>
Current: ${data.receive.current}<br>
CPU Local: ${data.receive.local_cpu}<br>
CPU Remote: ${data.receive.remote_cpu}<br>
            `;
        } else {
            output.innerHTML = `❌ ERROR: ${data.message}`;
        }

    } catch (error) {
        output.innerHTML = `❌ Gagal koneksi ke server<br>${error}`;
    }
}