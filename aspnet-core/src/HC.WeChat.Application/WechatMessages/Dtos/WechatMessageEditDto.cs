﻿using System.ComponentModel.DataAnnotations;
using HC.WeChat.WechatMessages.Dtos.LTMAutoMapper;
using HC.WeChat.WechatMessages;
using System;

namespace HC.WeChat.WechatMessages.Dtos
{
    public class WechatMessageEditDto
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        public Guid? Id { get; set; }

        /// <summary>
        /// 关键字
        /// </summary>
        [Required]
        [StringLength(50)]
        public string KeyWord { get; set; }


        /// <summary>
        /// 匹配模式（枚举 精准匹配、模糊匹配）
        /// </summary>
        [Required]
        public int MatchMode { get; set; }


        /// <summary>
        /// 消息类型（枚举 文字消息、图文消息）
        /// </summary>
        [Required]
        public int MsgType { get; set; }


        /// <summary>
        /// 回复内容
        /// </summary>
        [Required]
        public string Content { get; set; }


        /// <summary>
        /// 租户ID
        /// </summary>
        [Required]
        public int TenantId { get; set; }

    }
}