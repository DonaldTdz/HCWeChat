﻿using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using HC.WeChat.WechatEnums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HC.WeChat.Employees
{
    /// <summary>
    /// 员工表
    /// </summary>
    [Table("Employees")]
    public class Employee : FullAuditedEntity<Guid>, IMayHaveTenant
    {

        /// <summary>
        /// 员工编码
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Code { get; set; }

        /// <summary>
        /// 员工姓名
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        /// <summary>
        /// 员工职位（枚举 客户经理、营销人员）
        /// </summary>
        [Required]
        public UserTypeEnum Position { get; set; }

        /// <summary>
        /// 员工电话
        /// </summary>
        [StringLength(20)]
        public string Phone { get; set; }

        /// <summary>
        /// 所属公司（屏山分公司）
        /// </summary>
        [StringLength(200)]
        public string Company { get; set; }

        /// <summary>
        /// 所属市场部（屏山片区）
        /// </summary>
        [StringLength(200)]
        public string Department { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        [Required]
        public bool IsAction { get; set; }

        /// <summary>
        /// 租户ID
        /// </summary>
        public int? TenantId { get; set; }
    }
}
