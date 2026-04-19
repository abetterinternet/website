---
title: "ISRG Brighter Bytes February 2024 Newsletter"
date: "2024-02-22T11:17:42-08:00"
excerpt: "I went to FOSDEM and all I got was this free cert… well, actually there was so much more! • Our 2023 Annual Report • Automating releases for bindgen • The first step in shortening the Let’s Encrypt chain of trust • Data Privacy Week Recap • Writing standards for the Distributed Aggregation Protocol at the IETF • We are thrilled to announce a new Silver sponsor!"
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
									<td align="left" class="preheaderContent" pardot-data="" pardot-region="preheader_content00" style="text-size-adjust: 100%; color: rgb(128, 128, 128); font-family: Helvetica; font-size: 10px; line-height: 12.5px; text-align: left; padding: 10px 20px; background: rgb(249, 247, 237);" valign="top">The latest news from ISRG: February 2024</td>
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
									<td align="left" class="headerContent" pardot-region="header_image" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #505050; font-family: Helvetica; font-size: 20px; font-weight: bold; line-height: 20px; text-align: left; vertical-align: middle; padding: 0;" valign="top"><a href="www.abetterinternet.org/"><img alt="" border="0" height="310" src="/images/newsletters/2024/2024-02-22-isrg-brighter-bytes-february-2024-newsletter/image-01.png" style="width: 600px; height: 310px; border-width: 0px; border-style: solid;" width="600"></a></td>
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

									<h3><span style="color:#003a70;">I went to FOSDEM and all I got was this free cert… well, actually there was so much more!</span></h3>

									<p><img align="right" alt="" border="2" height="260" src="/images/newsletters/2024/2024-02-22-isrg-brighter-bytes-february-2024-newsletter/image-02.jpg" style="width: 250px; height: 260px; float: right; margin: 5px; border-width: 2px; border-style: solid;" width="250">Earlier this month, we had the opportunity to represent ISRG and our three projects at <strong><a href="fosdem.org/2024/" style="color: #3771c8;">FOSDEM</a></strong> in Brussels. It was a whirlwind of a weekend, filled with comments like "you made my life so much easier" to "honestly, I can't even believe I used to manually do all of this!"&nbsp;​​<br>
									<br>
									Over the span of two days, we talked to nearly 2,000 people — many were familiar with (and​​​ appreciative of) Let’s Encrypt, but didn’t know as much about ISRG and our other two projects, Divvi Up and Prossimo.<br>
									<br>
									We loved getting to share more about how we’re advancing our mission of building a more secure and privacy-respecting Internet. Check out the <strong><a href="www.abetterinternet.org/post/fosdem2024/" style="color: #3771c8;">full recap</a></strong> (and more pictures) in our blog post!</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(194, 233, 233);" valign="top">
									<h3><span style="color:#003a70;">Our 2023 Annual Report</span></h3>

									<p>Late last year we published our <strong><a href="www.abetterinternet.org/documents/2023-ISRG-Annual-Report.pdf" style="color: #3771c8;">2023 Annual Report</a>.</strong> If you haven’t had a chance to take a read through everything our team and community accomplished, take a read! Throughout last year, our team, community of supporters, sponsors, volunteers, and donors made incredible progress towards building a more secure and privacy-respecting Internet.</p>
									</td>
								</tr>
								<tr pardot-repeatable="" style="" class="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Security Bits</span></h1>

<h3 style="line-height: 1.38; margin-bottom: 8px;"><span style="color:#003a70;">Automating releases for <span style="font-family:Courier New,Courier,monospace;">bindgen</span></span></h3>

<p>One of our <strong><a href="www.memorysafety.org/" style="color: #3771c8;">Prossimo</a></strong> initiatives is focused on improving the tools needed to build memory safe software. <strong><span style="font-family:Courier New,Courier,monospace;">Bindgen</span></strong>&nbsp;is one of those tools — it helps accelerate the transition from C and C++ to Rust by generating FFI bindings. We partnered with <strong><a href="ferrous-systems.com/" style="color: #3771c8;">Ferrous Systems</a></strong> from August 2022 through December 2023 to make a number of improvements to <strong><span style="font-family:Courier New,Courier,monospace;">bindgen</span></strong>; in particular, automating releases. Read all about those improvements in our <strong><a href="www.memorysafety.org/blog/automating-releases-bindgen/" style="color: #3771c8;">recent blog post</a></strong> authored by our friends over at Ferrous.<br>
&nbsp;</p>

<h3 style="line-height: 1.38; margin-bottom: 8px;"><span style="color:#003a70;">The first step in shortening the Let’s Encrypt chain of trust</span></h3>

<p>Last July, we published a blog post about <strong><a href="letsencrypt.org/2023/07/10/cross-sign-expiration.html" style="color: #3771c8;">shortening the Let’s Encrypt chain of trust</a>.</strong> Since that was more than seven months ago, you may wonder why we’re including it in this newsletter. Well, as of February 8, 2024, Let's Encrypt has stopped providing the cross-sign from IdenTrust in the default chain downloaded at the end of the issuance process. For most Subscribers, no action is necessary at this time. All this means is that your ACME client will configure a chain which terminates at ISRG Root X1, and your web server will begin providing this shorter chain in all TLS handshakes. For the Subscribers who still rely on DST Root CA X3, we still offer that as an alternate chain.<br>
<br>
The next milestone in the transition will occur in June, when we will stop providing the longer cross-signed chain entirely. If you have any questions, we’re happy to answer them on our <strong><a href="community.letsencrypt.org/t/questions-regarding-shortening-the-lets-encrypt-chain-of-trust/201581" style="color: #3771c8;">Community Forum</a>.</strong></p>
</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top"><h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">Privacy Bytes</span></h1>

<h3 style="line-height: 1.38; margin-bottom: 8px;"><span style="color:#003a70;">Data Privacy Week Recap</span></h3>

<p>As we shared in our January newsletter, we participated in <strong><a href="staysafeonline.org/programs/data-privacy-week/" style="color: #3771c8;">Data Privacy Week</a></strong> from January 21-27. Through a series of social media posts, we discussed different facets of data privacy and outlined our efforts to tackle them. But our commitment to data privacy on a global scale goes well beyond a single awareness week – all three of our projects are centered around data privacy and Internet security.&nbsp;<br>
<br>
Let’s Encrypt helps keep your information secure by providing free and easy-to-use TLS certificates for Internet encryption. Divvi Up protects the privacy of your customers. And Prossimo is working hard to make the Internet safer by transitioning critical pieces of software to memory safe code, which helps protect your data by eliminating a class of vulnerabilities that often lead to data leaks.<br>
&nbsp;</p>

<h3 style="line-height: 1.38; margin-bottom: 8px;"><span style="color:#003a70;">Writing standards for the Distributed Aggregation Protocol at the IETF</span></h3>

<p>In our latest blog post by <strong><a href="divviup.org/" style="color: #3771c8;">Divvi Up</a></strong>&nbsp;engineer Tim Geoghegan, he reflects on how we’ve evolved Divvi Up through writing standards for the Distributed Aggregation Protocol (DAP) at the IETF.&nbsp;<br>
<br>
Tim shares insights about the process of writing standards and breaks down some of the technical details in hopes of making participation in the Internet standards process seem less daunting. He also sheds light on how DAP could shape the future of online privacy and data aggregation.&nbsp;<br>
<br>
Read the <strong><a href="divviup.org/blog/writing-dap-standards/" style="color: #3771c8;">full blog post</a></strong> to learn all about the process and how to become a part of the conversation!</p>
</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(194, 233, 233);" valign="top">
									<h1 style="color: #202020 !important; display: block; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; letter-spacing: normal; line-height: 26px; margin: 0; padding-bottom:10px; text-align: left"><span style="color:#3771c8;">New Sponsor Announcement</span><img align="right" alt="" border="0" height="101" src="/images/newsletters/2024/2024-02-22-isrg-brighter-bytes-february-2024-newsletter/image-03.png" style="width: 150px; float: right; height: 101px; border-width: 0px; border-style: solid;" width="150"></h1>

									<h3><span style="color:#003a70;">We are thrilled to announce a new&nbsp;Silver sponsor!​</span></h3>

									<div><strong><a href="www.coreweave.com/" style="color: #3771c8;">CoreWeave</a></strong> is a specialized cloud provider, delivering a massive scale of GPUs on top of the industry’s fastest and most flexible infrastructure. A modern, Kubernetes native cloud that’s designed with engineers and innovators in mind, CoreWeave offers unparalleled access to a broad range of compute solutions that are faster and less expensive than legacy cloud providers.</div>
									</td>
								</tr>
								<tr pardot-repeatable="" style="">
									<td align="left" class="bodyContent" pardot-data="link-color:#3771c8;" pardot-region="body_content00" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; text-align: left; padding: 20px; background: rgb(249, 247, 237);" valign="top">
									<h3><span style="color:#003a70;">Did you know?</span></h3>

									<p><strong>Sponsorships</strong> provide the majority of our annual funding. Billions of people worldwide depend on Let’s Encrypt continuing to be widely available, secure, well-maintained, and on the leading edge of encryption. We cannot do that without continued support from people like you and organizations like yours.<br>
									<br>
									<strong><img align="right" alt="" border="0" height="72" src="/images/newsletters/2024/2024-02-22-isrg-brighter-bytes-february-2024-newsletter/image-04.png" style="width: 120px; height: 72px; float: right; border-width: 0px; border-style: solid;" width="120"></strong>If high quality and reliable website encryption is critical to your business operations, please consider <strong><a href="www.abetterinternet.org/sponsor/" style="color: #3771c8;">becoming a sponsor</a></strong>. And if you’re already a sponsor, we <strong>thank you</strong> for helping us build a more secure and privacy-respecting Internet!</p>
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
									<td align="left" class="footerContent" pardot-data="" pardot-region="footer_content01" style="text-size-adjust: 100%; color: rgb(80, 80, 80); font-family: Helvetica; font-size: 10px; line-height: 15px; text-align: left; padding: 0px 20px 20px; background: rgb(249, 247, 237);" valign="top"><br>
									Internet Security Research Group<br>
									EIN 46-3344200<br>
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
