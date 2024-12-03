// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on("Integration Request", {
	refresh: function (frm) {
		if (frm.doc.data) {
			try {
				const prettyJSON = JSON.stringify(JSON.parse(frm.doc.data), null, 4);
				frm.fields_dict.data.$wrapper.html(`<pre style="white-space: pre-wrap; word-wrap: break-word;">${prettyJSON}</pre>`);
			} catch {
				
			}

			frm.add_custom_button(__('Copy Payload'), function () {
				if (frm.doc.data) {
					navigator.clipboard.writeText(frm.doc.data).then(() => {
						frappe.show_alert({
							message: __('Payload copied to clipboard!'),
							indicator: 'green',
						});
					}).catch((err) => {
						frappe.msgprint({
							title: __('Error'),
							message: __('Failed to copy data to clipboard: ') + err,
							indicator: 'red',
						});
					});
				}
			})
		}
	}
});
