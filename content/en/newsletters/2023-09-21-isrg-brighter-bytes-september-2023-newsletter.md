---
title: "ISRG Brighter Bytes September 2023 Newsletter"
date: "2023-09-21T12:09:48-07:00"
excerpt: "The Big Byte: Let's Encrypt turns eight • Increase your security governance with CAA • OpenSSF provides $530k for Rustls and Rust for Linux • The first stable release of a memory safe sudo implementation • Join us for Tectonics • How HTTPS Works • Hoodie for your thoughts? • Ten Years of building a brighter Web • Thanks to our community of donors around the world"
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
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: September 2023</td>
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
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="abetterinternet.org"><img alt="" border="0" height="310" id="headerImage" src="/images/newsletters/2023/2023-09-21-isrg-brighter-bytes-september-2023-newsletter/image-01.png" style="max-width: 600px; outline: none; text-decoration: none; width: 600px; height: 310px; border-width: 0px; border-style: solid;" width="600"></a></td>
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
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">The Big Byte:</span><br>
									<br>
									<span style="font-size:19.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#171347"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Let's Encrypt turns eight</span></span></span></span></span></span></h1>
									<br>
									<span style="color:#171347;">While this year marks the tenth anniversary of ISRG, the nonprofit behind Let's Encrypt, last week marked an important milestone for Let's Encrypt: the <a href="twitter.com/letsencrypt/status/1702321820320588252">eighth anniversary of issuing its first TLS certificate</a>. We dug through the archives to find our <a href="helloworld.letsencrypt.org/">Hello World</a> page from that day. Over eight years Let's Encrypt has gone on to issue more than three billion certificates, today serving more than 350,000,000 domains around the world.&nbsp;&nbsp;&nbsp;</span></td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">Security Bits</span></h1>

									<h3>Increase your security governance with CAA</h3>

									<p>We published a <a href="letsencrypt.org/2023/09/07/caa23">blog post</a> about how easy it is for Let's Encrypt subscribers&nbsp;to setup Certificate Authority Authorization (CAA) records for your domains. CAA helps establish stronger DNS governance by specifying which certificate authority&nbsp;can issue certificates for the specified domain.&nbsp;<br>
									&nbsp;</p>

									<h3>OpenSSF provides $530k for Rustls and Rust for Linux</h3>

									<p>Prossimo continues to <a href="memorysafety.org/blog/rustls-and-rust-for-linux-funding-openssf/">advance the functionality and scalability</a> of the Rustls TLS library and the Rust for Linux effort thanks to $530,000 in funding from the OpenSSF’s Alpha-Omega project. This funding will further Prossimo’s efforts to bring memory safety to critical components of the Internet and further OpenSSF’s Alpha-Omega project’s mission to protect society by improving the security of open source software.</p>

									<h3><br>
									The first stable release of a memory safe sudo implementation</h3>

									<p>Prossimo is pleased to <a href="memorysafety.org/blog/sudo-first-stable-release/">announce the first stable release of sudo-rs</a>, our Rust rewrite of the critical sudo utility. The sudo utility is one of the most common ways for engineers to cross the privacy boundary between user and administrative accounts in the ubiquitous Linux operating system. As such, its security is of the utmost importance.</p>

									<h3><br>
									Join us for Tectonics</h3>

									<p>We're excited to announce that <a href="tectonics.memorysafety.org/">registration is now open for Tectonics</a>, an event focused on fostering the 2.0 conversation about memory safety. In a day long convening on November 2 in San Francisco, we're bringing together a small group of people to drive the conversation, and action, around memory safety forward.&nbsp;</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">Privacy Bytes</span></h1>

									<h3>How HTTPS Works</h3>

									<p>Longtime sponsor of Let's Encrypt, DNSimple, created this comic overviewing <a href="howhttps.works/">how HTTPS works</a> all the way back in 2018. It made our day to see it on the front page of Hacker News last week.&nbsp;</p>

									<h3>Hoodie for your thoughts?</h3>

									<p>We're giving some thought to our external channels for reaching our audience. We'd love your thoughts on this <a href="isrg.formstack.com/forms/newsletter">one-question survey</a>. If you complete it before September 28, 2023, you'll enter yourself in a chance to win a Let's Encrypt hoodie.&nbsp;</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#171347;">Ten Years of building a brighter Web</span></h1>

									<h3>Thanks to our community of donors around the world</h3>

									<p>Last week we sent an email to you all celebrating the anniversary of Let's Encrypt issuing its first certificate, highlighting the importance people like you have in us realizing this impact. We were so humbled by the response from so many of you both in terms of dollars donated and kind words shared. To all of you who donated to support our mission, thank you for your support.</p>

									<h3>Did you know?</h3>

									<p>For many organizations, we're in the midst of budgeting season. If your organization uses or benefits from Let's Encrypt, consider finding budget for coming on board as a sponsor in 2024. Let's Encrypt sponsors provide the majority of our funding, and we are grateful for their part in helping us realize our mission. Email sponsor@abetterinternet.org for more information.</p>
									</td>
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
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top">Internet Security Research Group<br>
									48 Market St, PMB 77519<br>
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
