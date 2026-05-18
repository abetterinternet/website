---
title: "Brighter Bytes - May 2025 Newsletter"
date: "2025-05-21T09:48:18-07:00"
excerpt: "Ending TLS Client Authentication Certificate Support in 2026 • How Pebble Supports ACME Client Developers • Prossimo Updates • $20,000 rav1d AV1 Decoder Performance Bounty • Rustls Server-Side Performance • Divvi Up Updates • Detecting Privacy Harms in Digital Identity using Divvi Up • Ten Years of Let's Encrypt • Sustaining a More Secure Internet: The Power of Recurring Donations • Welcome New Sponsors"
type: "newsletter"
---

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!-- Facebook sharing information tags -->
    <meta property="og:title" content="{{Subject}}" />

    <title>{{Subject}}</title>
</head>

<body bgcolor="#FAFAFA" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; height: 100% !important; width: 100% !important; background-color: #f9f7ed; margin: 0; padding: 0;">
<style type="text/css">#outlook a {
              padding: 0;
          }
          .body{
              width: 100% !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              margin: 0;
              padding: 0;
          }
          .ExternalClass {
              width:100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
              line-height: 100%;
          }
          img {
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
          a img {
              border: none;
          }
          p {
              margin: 1em 0;
          }
          table td {
              border-collapse: collapse;
          }
          /* hide unsubscribe from forwards*/
          blockquote .original-only, .WordSection1 .original-only {
            display: none !important;
          }

          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
            body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

            #bodyCell{padding:10px !important;}

            #templateContainer{
              max-width:600px !important;
              width:100% !important;
            }

            h1{
              font-size:24px !important;
              line-height:100% !important;
            }

            h2{
              font-size:20px !important;
              line-height:100% !important;
            }

            h3{
              font-size:18px !important;
              line-height:100% !important;
            }

            h4{
              font-size:16px !important;
              line-height:100% !important;
            }


            #templatePreheader{display:none !important;} /* Hide the template preheader to save space */

            #headerImage{
              height:auto !important;
              max-width:600px !important;
              width:100% !important;
            }

            .headerContent{
              font-size:20px !important;
              line-height:125% !important;
            }

            #bodyImage{
              height:auto !important;
              max-width:560px !important;
              width:100% !important;
            }

            .bodyContent{
              font-size:18px !important;
              line-height:125% !important;
            }

            .footerContent{
              font-size:14px !important;
              line-height:115% !important;
            }

            .footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
          }
</style>
<table align="center" border="0" cellpadding="0" cellspacing="0" id="bodyTable" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; height: 100% !important; margin: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0; width: 100% !important" width="100%">
	<tbody>
		<tr>
			<td align="center" id="bodyCell" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; height: 100% !important; width: 100% !important; border-top-width: 0px; border-top-color: #f9f7ed; border-top-style: solid; margin: 0; padding: 20px;" valign="top"><!-- BEGIN TEMPLATE // -->
			<table border="0" cellpadding="0" cellspacing="0" id="templateContainer" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; width: 600px; border: 1px solid #f9f7ed;">
				<tbody>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN PREHEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templatePreheader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr style="">
									<td align="left" class="preheaderContent" pardot-data="link-color:#3771c8;" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: May 2025</td>
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content01" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px 10px 0px; background: rgb(249, 247, 237);" valign="top" width="180">&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END PREHEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN HEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateHeader" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><img alt="" border="0" src="/images/newsletters/2025/2025-05-21-brighter-bytes-may-2025-newsletter/image-01.png" style="width: 620px; border-width: 0px; border-style: solid;" width="620">​​​​​</td>
								</tr>
							</tbody>
						</table>
						<!-- // END HEADER --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN BODY // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateBody" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-bottom-color: #f9f7ed; border-bottom-style: solid; border-bottom-width: 1px; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">The Big Byte</span></h1>

									<h3><span style="color:#003a70;">Ending TLS Client Authentication Certificate Support in 2026</span></h3>
									Let’s Encrypt will no longer include the “TLS Client Authentication” Extended Key Usage (EKU) in our certificates beginning in 2026. Most users who use Let’s Encrypt to secure websites won’t be affected and won’t need to take any action. However, if you use Let’s Encrypt certificates as client certificates to authenticate to a server, this change may impact you.<br>
									<br>
									To minimize disruption, Let’s Encrypt will roll this change out in multiple stages, using <a href="https://outreach.abetterinternet.org/e/1011011/docs-profiles-/3dm95/%%email_id%%/h/%%internal.tracker_url_hash%%">ACME Profiles</a>:

									<ul>
										<li><strong>May 14, 2025:</strong> Let’s Encrypt already excludes the Client Authentication EKU on our <span style="font-family:Courier New,Courier,monospace;">tlsserver </span>ACME profile. You can verify compatibility by issuing certificates with this profile now.</li>
										<li><strong>October 1, 2025:</strong> Let’s Encrypt will launch a new <span style="font-family:Courier New,Courier,monospace;">tlsclient</span> ACME profile which will retain the TLS Client Authentication EKU. Users who need additional time to migrate can opt-in to this profile.</li>
										<li><strong>February 11, 2026: </strong>the default <span style="font-family:Courier New,Courier,monospace;">classic</span> ACME profile will no longer contain the Client Authentication EKU.</li>
										<li><strong>May 13, 2026:</strong> the <span style="font-family:Courier New,Courier,monospace;">tlsclient</span> ACME profile will no longer be available and no further certificates with the Client Authentication EKU will be issued.</li>
									</ul>
									Once this is completed, Let’s Encrypt will switch to issuing with new intermediate Certificate Authorities which also do not contain the TLS Client Authentication EKU.&nbsp;<br>
									<br>
									For some background information, all certificates include a list of intended uses, known as Extended Key Usages (EKU). Let’s Encrypt certificates have included two EKUs: TLS Server Authentication and TLS Client Authentication.
									<ul>
										<li>TLS Server Authentication is used to authenticate connections to TLS Servers, like websites.</li>
										<li>TLS Client Authentication is used by clients to authenticate themselves to a server. This feature is not typically used on the web, and is not required on the certificates used on a website.</li>
									</ul>
									After this change is complete, only TLS Server Authentication will be available from Let’s Encrypt.<br>
									<br>
									This change is prompted by changes to Google Chrome’s root program requirements, which impose a June 2026 deadline to split TLS Client and Server Authentication into separate PKIs. Many uses of client authentication are better served by a private certificate authority, and so Let’s Encrypt is discontinuing support for TLS Client Authentication ahead of this deadline.</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h3><span style="color:#003a70;">How Pebble Supports ACME Client Developers</span></h3>
									Together with the IETF community, we created the <a href="https://outreach.abetterinternet.org/e/1011011/ificate-Management-Environment/3dm98/%%email_id%%/h/%%internal.tracker_url_hash%%">ACME standard</a> to support completely automated certificate issuance. This open standard is now supported by <a href="https://outreach.abetterinternet.org/e/1011011/docs-client-options-/3dm9c/%%email_id%%/h/%%internal.tracker_url_hash%%">dozens of clients</a>. On the server side, did you know that we have not one but two open-source ACME server implementations?<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/4-30-pebbleacmeimplementation-/3dm9g/%%email_id%%/h/%%internal.tracker_url_hash%%">Read the full blog post</a>.<br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Prossimo Updates</span></h1>

									<h3><span style="color:#003a70;">$20,000 rav1d AV1 Decoder Performance Bounty</span></h3>
									In March of 2023 we <a href="https://outreach.abetterinternet.org/e/1011011/blog-safer-av1-decoder-/3dm9k/%%email_id%%/h/%%internal.tracker_url_hash%%">announced</a> that we were starting work on a safer high performance AV1 decoder called rav1d, written in Rust. We partnered with <a href="https://outreach.abetterinternet.org/e/1011011/2025-05-21/3dm9n/%%email_id%%/h/%%internal.tracker_url_hash%%">Immunant</a> to do the engineering work. By September of 2024 rav1d was basically complete and we <a href="https://outreach.abetterinternet.org/e/1011011/log-porting-c-to-rust-for-av1-/3dm9r/%%email_id%%/h/%%internal.tracker_url_hash%%">learned a lot</a> during the process. Today rav1d works well—it passes all the same tests as the dav1d decoder it is based on, which is written in C. It’s possible to build and run Chromium with it.<br>
									<br>
									There’s just one problem—it’s not quite as fast as the C version. We want to change that and we need your help.<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/blog-rav1d-perf-bounty-/3dm9v/%%email_id%%/h/%%internal.tracker_url_hash%%">Read more about the rav1d AV1 Decoder Performance Bounty</a>.<br>
									&nbsp;
									<h3><span style="color:#003a70;">Rustls Server-Side Performance</span></h3>
									In past years, the Rustls project has been happy to receive substantial investments from the ISRG. One of our goals has been to improve performance without compromising on safety. We last posted about our performance improvements in October of 2024, and we're back to talk about another round of improvements.<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/blog-rustls-server-perf-/3dm9y/%%email_id%%/h/%%internal.tracker_url_hash%%">Read more about the latest with Rustls</a>.<br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#3771c8">Divvi Up Updates</font></h1>

									<h3><span style="color:#003a70;">Detecting Privacy Harms in Digital Identity using Divvi Up</span>​​​​​</h3>
									Traditionally, our most authoritative and reliable identity documents are pieces of paper issued by governments, like driver's licenses or passports. But as more and more of our essential interactions, including our dealings with those same governments, move into the digital realm, there's a growing need for government issued credentials to include a digital component that is usable on the Internet.<br>
									<br>
									There's also an opportunity for governments to ensure that these digital credentials use state of the art safety mechanisms to prevent privacy abuses of the sort that have become all too common online.<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/ital-identity-harms-detection-/3dmb2/%%email_id%%/h/%%internal.tracker_url_hash%%">Read more about the latest with Divvi Up and digital identity</a>.<br>
									&nbsp;
									<hr></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0px; padding-bottom: 10px; text-align: left;"><font color="#3771c8">Ten Years of Let's Encrypt</font></h1>

									<h3><span style="color:#003a70;">Sustaining a More Secure Internet: The Power of Recurring Donations</span>​​​​​</h3>
									At Let’s Encrypt we know that building a secure Internet isn’t just a technical challenge—it’s a long-term commitment. Over the past decade we’ve made enormous strides: from issuing billions of TLS certificates to continually innovating to keep the web safer and more accessible. But none of this would be possible without recurring donations from individuals and organizations around the world.<br>
									<br>
									Recurring donations are more than just financial support; they allow us to plan, innovate, and keep improving with confidence, knowing that month after month, year after year, our supporters are there. This consistent backing empowers us to maintain a secure, privacy-respecting Internet for all.<br>
									<br>
									Our tenth anniversary tagline, <em>Encryption for Everybody,</em> highlights this vision. It’s both a technical goal and a fundamental belief that secure communication should be available to everyone, everywhere.<br>
									<br>
									When we asked our recurring donors why they give, their responses affirmed how essential this commitment is. One longtime supporter shared:<br>
									<br>
									<strong>"Supporting Let's Encrypt aligns with my belief in a privacy-conscious world, where encrypted communication is the default."</strong><br>
									<br>
									For some, it’s about paying it forward, helping future users benefit as they once did.<br>
									<br>
									<strong>"For my 18th birthday, I got my last name as a domain. As a young tech enthusiast with little money, Let's Encrypt made it possible for me to get a TLS certificate and learn about technology. Back then, I was a student using it for free. Now that I have a stable income, donating is my way of giving back and helping others have the same opportunities I did."</strong><br>
									<br>
									The next decade of Let’s Encrypt will likely be about maintaining that commitment to encryption for everybody. It’s about ensuring that our work remains reliable, accessible, and—most importantly—supported by people who believe in what we do. To everyone who’s been part of this journey, thank you. We couldn’t do it without you.<br>
									<br>
									During Let’s Encrypt’s 10th Anniversary Year, we’re celebrating our community and reflecting on our journey. We’d be thrilled to hear from you. Connect with us on LinkedIn, our community forum, or email us at outreach@letsencrypt.org. Let’s keep building a secure Internet together!&nbsp;<br>
									<br>
									<strong>Let’s Encrypt is a project of the nonprofit Internet Security Research Group, a 501(c)(3) nonprofit. To support our work, visit <a href="https://outreach.abetterinternet.org/e/1011011/donate/3dmb5/%%email_id%%/h/%%internal.tracker_url_hash%%">letsencrypt.org/donate</a>.</strong><br>
									&nbsp;
									<h3><span style="color:#003a70;">Welcome New Sponsors</span>​​​​​</h3>
									We're grateful for two new sponsors joining us this month! Shoutout to the teams at <a href="https://outreach.abetterinternet.org/e/1011011/2025-05-21/3dmb8/%%email_id%%/h/%%internal.tracker_url_hash%%">Porkbun</a> and <a href="https://outreach.abetterinternet.org/e/1011011/2025-05-21/3dmbc/%%email_id%%/h/%%internal.tracker_url_hash%%">Gamma</a> for supporting us during our tenth anniversary year. Curious to join them?<br>
									<br>
									<a href="https://outreach.abetterinternet.org/e/1011011/iSAcFxjL2wG5r48gAI264C6JN-view/3dmbg/%%email_id%%/h/%%internal.tracker_url_hash%%">Take a look at the benefits of being a Sponsor here</a>.</td>
								</tr>
							</tbody>
						</table>
						<!-- // END BODY --></td>
					</tr>
					<tr>
						<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"><!-- BEGIN FOOTER // -->
						<table border="0" cellpadding="0" cellspacing="0" id="templateFooter" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f9f7ed; border-collapse: collapse !important; border-top-color: #f9f7ed; border-top-style: solid; border-top-width: 1px; mso-table-lspace: 0pt; mso-table-rspace: 0pt" width="100%">
							<tbody>
								<tr style="">
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><br>
									Internet Security Research Group<br>
									548 Market St, PMB 77519<br>
									San Francisco, California<br>
									94104-5401</td>
								</tr>
								<tr style="">
									<td align="left" class="footerContent original-only" pardot-data="" pardot-region="footer_content02" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><a href="{{Unsubscribe}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">unsubscribe from all emails</a>&nbsp;&nbsp;&nbsp;<a href="{{EmailPreferenceCenter}}" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #606060; font-weight: normal; text-decoration: underline;">update subscription preferences</a>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<!-- // END FOOTER --></td>
					</tr>
				</tbody>
			</table>
			<!-- // END TEMPLATE --></td>
		</tr>
	</tbody>
</table>
<br>
<!--
          This email was originally designed by the wonderful folks at MailChimp and remixed by Pardot.
          It is licensed under CC BY-SA 3.0
        -->
</body>
</html>
